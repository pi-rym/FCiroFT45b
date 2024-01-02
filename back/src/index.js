require("dotenv").config();
// console.log(process.env) -> { PORT: 3001, HOST: "localhost" }
const express = require("express")
const { PORT, HOST } = process.env;
const router = require("./routes/index")
const getCharById = require("./controllers/getCharById")
const { headers } = require("./utils/reusable")

// ? CON EXPRESS
const server = express()

//? mioddleware para poder leer el req.body
server.use(express.json())

//? agregando headers
/* server.use((req, res, next) => {
  res.header(headers)
  next()
}) */
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//? usando router
server.use("/rickandmorty", router)
//
server.listen(PORT, HOST, function () {
  console.log(`Server listening on port: ${PORT}`);
});


//? Con HTTP -> WEB SERVER
/* const http = require("http");

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
  }); */

