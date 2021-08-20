const dotenv = require("dotenv");

dotenv.config();

module.exports = { DB_URL, DEBUG_MODE, SECRET_KEY } = process.env;
