const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const pictureDirectory = process.env.UPLOAD_DIR || "public/";

const renamePicture = (req, res, next) => {
  const { originalname } = req.file;

  const { filename } = req.file;

  // On utilise la fonction rename de fs pour renommer le fichier
  const uuid = uuidv4();

  fs.rename(
    `${pictureDirectory}${filename}`,
    `${pictureDirectory}${uuid}-${originalname}`,
    (err) => {
      if (err) throw err;
      req.picture = `${uuid}-${originalname}`;
      next();
    }
  );
};

const sendPicture = (req, res) => {
  const { fileName } = req.params;

  res.download(pictureDirectory + fileName, fileName, (err) => {
    if (err) {
      res.status(404).send({
        message: `Picture not found.`,
      });
    }
  });
};

module.exports = { renamePicture, sendPicture };
