require("dotenv").config();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const models = require("../models");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.password;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.administrator.hashedPassword, req.body.password, hashingOptions)
    .then((isVerified) => {
      if (isVerified) {
        const payload = { sub: req.administrator.id };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          algorithm: "HS512",
          expiresIn: "12h",
        });

        delete req.administrator.hashedPassword;
        res.send({ token, administrator: req.administrator });
      } else {
        res.status(401).send({ message: "Wrong password" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyToken = (req, res, next) => {
  try {
    const authorization = req.get("Authorization");

    if (authorization == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    req.payload = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

const verifyEmail = (req, res, next) => {
  const { email } = req.body;
  models.admin
    .selectEmail(email)
    .then(([result]) => {
      console.warn(email);
      console.warn(result);
      if (email === result[0]?.email) {
        res.sendStatus(401);
        console.warn("cet email existe");
      } else {
        console.warn("cet email n'existe pas ");
        next();
      }
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(501);
    });
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyEmail,
};
