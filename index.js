const express = require("express");
const errorHandler = require("./http/Error/ErrorHandler");
const app = express();
require("./http/config/conn");
const auth = require("./http/routers/auth");
const posts = require("./http/routers/post");
const path = require("path");
const comment = require("./http/routers/comment");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOption = {
  credentials: true,
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));
app.use("/image", express.static("images"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", auth);
app.use("/api/blog", posts);
app.use("/user", comment);

// Error Handler
app.use(errorHandler);

app.listen(process.env.PORT || 8080, () => {
  console.log("Your server is started at ");
});
