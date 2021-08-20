const User = require("../models/userRegister");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const CustomErrorHandler = require("../Error/CustomErrorHandler");

const admin = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return next(CustomErrorHandler.auth());
  }
  try {
    const verify = await jwt.verify(header, SECRET_KEY);
    const user = await User.findOne({ _id: verify._id });
    req.token = header;
    req.user = user;
    if (user.role === "Admin") {
      next();
    } else {
      return next(
        CustomErrorHandler.auth("You are not autharized to access this page")
      );
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = admin;
