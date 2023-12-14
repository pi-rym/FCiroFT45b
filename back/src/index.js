require("dotenv").config();
// console.log(process.env) -> { PORT: 3001, HOST: "localhost" }
const { PORT, HOST } = process.env;
const http = require("http");
const characters = require("./utils/data"); // -> [{},{}]
const getCharById = require("./controllers/getCharById")
const {headers} = require("./utils/reusable")

http
  .createServer(function (req, res) {
    const { url } = req;
    if (url.includes("/rickandmorty/character")) {
      // url -> /rickandmorty/character/42
      // url.split("/") -> ["", "rickandmorty", "character", "42"]
      const id = url.split("/").at(-1);
      getCharById(res, id)
    } else {
      res.writeHead(404, headers);
      const obj = {
        message: "Aun no tengo nada para esta ruta",
      };
      res.write(JSON.stringify(obj));
      res.end();
    }
  })
  .listen(PORT, HOST, function () {
    console.log(`Server listening on port: ${PORT}`);
  });
