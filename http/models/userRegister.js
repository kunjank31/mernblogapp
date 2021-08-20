const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const registerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    // tokens: [
    //   {
    //     token: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);
// registerSchema.methods.generateToken = async function (user) {
//   const tokenGenerate = jwt.sign({ user }, SECRET_KEY, {
//     expiresIn: "7d",
//   });
//   // this.tokens = this.tokens.concat({ token: tokenGenerate });
//   // await this.save();
//   return tokenGenerate;
// };
const Register = new mongoose.model("Register", registerSchema);

module.exports = Register;
