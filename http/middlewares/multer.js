const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.floor(Math.random() * 1e9)}${path
      .extname(file.originalname)
      .toLowerCase()}`;
    cb(null, uniqueName);
  },
});
const fileFilter = (req, file, cb) => {
  cb(null, true);
};
const upload = multer({
  storage,
  fileFilter,
}).single("fileName");

module.exports = upload;
