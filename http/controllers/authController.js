const User = require("../models/userRegister");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const CustomErrorHandler = require("../Error/CustomErrorHandler");

const generateToken = (user) => {
  return jwt.sign({ user }, SECRET_KEY, {
    expiresIn: "7d",
  });
};

const authController = {
  async register(req, res, next) {
    const { email, password, name } = req.body;
    try {
      const hashPassword = await bcrypt.hash(password, 10);
      const emailValid = await User.exists({ email });
      if (emailValid) {
        return next(CustomErrorHandler.emailError());
      }
      try {
        const user = new User({
          name,
          email,
          password: hashPassword,
        });
        // const token = await user.generateToken(user);
        // res.cookie("jwtoken", token, {
        //   expires: new Date(Date.now() + 30000),
        //   httpOnly: true,
        // });
        const result = await user.save();
        const token = generateToken(result);
        return res.status(201).json({ message: "Register Sucessfull", token });
      } catch (error) {
        return res.json(CustomErrorHandler.required());
      }
    } catch (error) {
      return next(error);
    }
  },
  // Login
  async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!email) {
        return next(CustomErrorHandler.loginSystem());
      }
      const comparePassword = await bcrypt.compare(password, user.password);

      // res.cookie("jwtoken", token, {
      //   httpOnly: true,
      // });
      if (!comparePassword) {
        return next(CustomErrorHandler.loginSystem());
      }
      const token = generateToken(user);
      return res.status(200).json({ message: "You have logedin", token });
    } catch (error) {
      return next(error);
    }
  },
  // Logout
  async logout(req, res, next) {
    try {
      // req.user.tokens = req.user.tokens.filter((storeToken) => {
      //   return req.token !== storeToken.token;
      // });
      req.user.tokens = [];
      res.clearCookie("jwtoken", { path: "/" });
      await req.user.save();
      return res.status(200).json({ message: "Logout Successfully" });
    } catch (error) {
      console.log("error", +error);
      return next(error);
    }
  },
  // req.user.tokens = [];
  // console.log('logout');
  // res.clearCookie("jwtoken", { path: "/" });
  // return res.status(200).json({ message: "Logout Successfully" });
  // },

  // Delete USer
  async userDelete(req, res, next) {
    try {
      const id = await User.findByIdAndDelete({ _id: req.params.id });
      if (!id) {
        return res.json({ message: "Not Found User" });
      }
      return res.status(200).json({ message: "User deleted" });
    } catch (error) {
      return next(error);
    }
  },
  // Change Password
  async changePassword(req, res, next) {
    const { oldPassword, newPassword, userId } = req.body;
    if (oldPassword.length === 0 || newPassword.length === 0){
      return res.status(400).json({ msg:{
        error: 'All fields are required'
      } });
    }
      try {
        const user = await User.findOne({ _id: userId });
        if (user) {
          const verifyPassword = await bcrypt.compare(
            oldPassword,
            user.password
          );
          if (!verifyPassword) {
            return res.status(400).json({ msg: "wrong password" });
          } else {
            try {
              const hash = await bcrypt.hash(newPassword, 10);
              const newUser = await User.findOneAndUpdate(
                { _id: user },
                { password: hash },
                { new: true }
              );
              return res
                .status(200)
                .json({ msg: "Your Password has been changed" });
            } catch (error) {
              return res.status(404).json({ msg: "Something went wrong !" });
            }
          }
        }
      } catch (error) {
        return next(error);
      }
  },
};
module.exports = authController;
