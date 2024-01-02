//? con dotenv
require("dotenv").config();
const { EMAIL, PASSWORD } = process.env;
//? con utils - users
const users = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;
  //? con utils - users
  /* for (const user of users) {
    if (user.email === email && user.password === password) {
      res.status(200).json(JSON.stringify({ access: true }));
    } else {
      res
        .status(403)
        .json(JSON.stringify({ access: false, message: "Acceso denegado" }));
    }
  } */
  //? con dotenv
  if (EMAIL === email && PASSWORD === password) {
    res.status(200).json({ access: true });
  } else {
    res
      .status(403)
      .json({ access: false, message: "Acceso denegado" });
  }
}

module.exports = login;
