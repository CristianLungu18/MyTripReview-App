const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

module.exports = upload;
