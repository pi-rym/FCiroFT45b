require("dotenv").config();
// console.log(process.env) -> { PORT: 3001, HOST: "localhost" }
const { PORT, HOST } = process.env;
const http = require("http");
const characters = require("./utils/data"); // -> [{},{}]
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

http
  .createServer(function (req, res) {
    const { url } = req;
    if (url.includes("/rickandmorty/character")) {
      // url -> /rickandmorty/character/42
      // url.split("/") -> ["", "rickandmorty", "character", "42"]
      "hola".charAt(1); // Array - like "hola"[0]
      const id = url.split("/").at(-1);
      const character = characters.find((char) => char.id === Number(id));
      res.writeHead(200, headers);
      res.write(JSON.stringify(character));
      res.end();
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
