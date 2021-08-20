const { DEBUG_MODE } = require("../config");
const CustomErrorHandler = require("./CustomErrorHandler");
const errorHandler = (err, req, res, next) => {
  let status = 500;
  let data = {
    message: "Internal Server Error",
    ...(DEBUG_MODE === "true" && { originalError: err.message }),
  };
  if (err instanceof CustomErrorHandler) {
    status = err.status;
    data = {
      message: err.message,
    };
  }
  return res.status(status).json(data);
};

module.exports = errorHandler;
