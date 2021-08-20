class CustomErrorHandler extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
  static emailError(message = "Email or Username already is taken") {
    return new CustomErrorHandler(409, message);
  }
  static loginSystem(message = "Caredentials Mismatch") {
    return new CustomErrorHandler(400, message);
  }
  static required(message = "All fields are required") {
    return new CustomErrorHandler(400, message);
  }
  static auth(message = "Not Authentic") {
    return new CustomErrorHandler(401, message);
  }
  static invalid(message = "Invalid User") {
    return new CustomErrorHandler(401, message);
  }
}

module.exports = CustomErrorHandler;
