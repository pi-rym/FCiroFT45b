require("dotenv").config();
const { DB, DB_PORT, DB_HOST, DB_USER, DB_NAME, DB_PASSWORD } = process.env;
const { Sequelize } = require("sequelize");
const { UserModel, FavoriteModel } = require("./models/index");
// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const URL_CONEXION = `${DB}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const sequelize = new Sequelize(URL_CONEXION, {
  logging: console.log("Connected"),
});

UserModel(sequelize);
FavoriteModel(sequelize);

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  conn: sequelize,
};
