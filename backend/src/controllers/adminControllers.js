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

const findByToken = (req, res) => {
  const id = req.payload.sub;
  models.administrator
    .find(id)
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
    .selectEmail(email)
    .then(([administrator]) => {
      if (administrator[0] != null) {
        [req.administrator] = administrator;

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

  // TODO validations (length, format...)

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

module.exports = {
  browse,
  browseByName,
  read,
  findByToken,
  getAdminByEmailWithPasswordAndPassToNext,
  add,
};
