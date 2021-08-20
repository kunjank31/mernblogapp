const User = require("../models/userRegister");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const CustomErrorHandler = require("../Error/CustomErrorHandler");

const authUser = async (req, res, next) => {
  const authHeaders = req.headers.authorization;
  const token = authHeaders.split(" ")[1]
  // if (!authHeaders) {
  //   return next(CustomErrorHandler.auth());
  // }  
  try {
    const verifyToken = jwt.verify(token, SECRET_KEY);
    // const verifyToken = jwt.verify(authHeaders, SECRET_KEY);
    // const user = await User.findOne({
    //   _id: verifyToken._id,
    //   "tokens.token": token,
    // });
    // req.token = token;
    // req.user = user;
    // req.userId = user._id;
    next();
  } catch (error) {
    return next(CustomErrorHandler.invalid());
  }
};

module.exports = authUser;
