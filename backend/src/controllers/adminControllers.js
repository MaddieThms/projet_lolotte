const models = require("../models");

const browse = (req, res) => {
  models.administrator
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseByName = (req, res) => {
  models.administrator
    .getUserByName()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.administrator
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getAdminByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;

  models.administrator
    .findByEmailWithPassword(email)
    .then(([administrators]) => {
      if (administrators[0] != null) {
        [req.administrator] = administrators;

        next();
      } else res.status(401).send({ message: "Admin not found" });
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(501);
    });
};

const add = (req, res) => {
  const administrator = req.body;

  models.administrator
    .insert(administrator)
    .then(([result]) => {
      res.location(`/user/${result.insertId}`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateAvatar = (req, res) => {
  const id = req.payload.sub;
  const { avatar } = req;

  models.user
    .updateAvatar(id, avatar)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.status(202).send({ avatar });
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  browseByName,
  read,
  getAdminByEmailWithPasswordAndPassToNext,
  add,
  updateAvatar,
};
