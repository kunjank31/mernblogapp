const fs = require("fs");
module.exports = (req, res, next) => {
  if (typeof req.file === "undefined" || typeof req.body === "undefined") {
    return res.status(400).json({ msg: "Problem with sending data" });
  }
  if (
    !req.file.mimetype.includes("jpeg") &&
    !req.file.mimetype.includes("png") &&
    !req.file.mimetype.includes("jpg") &&
    !req.file.mimetype.includes("webp")
  ) {
    fs.unlinkSync(req.file.path);
    return res.status(400).json({ msg: "file not supported !!" });
  }
  console.log(req.file);
  if (req.file.size > 1 * 1000 * 1000) {
    fs.unlinkSync(req.file.path);
    return res.status(400).json({ msg: "file should be less than 1mb" });
  }
  next();
};
