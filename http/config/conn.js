const mongoose = require("mongoose");
const { DB_URL } = require("./index");

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connection Successfully....");
  })
  .catch((e) => {
    console.log(e);
  });
