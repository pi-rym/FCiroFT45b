require("dotenv").config();
// console.log(process.env) -> { PORT: 3001, HOST: "localhost" }
const { PORT, HOST } = process.env;
const server = require("./server");

server.listen(PORT, HOST, function () {
  console.log(`Server listening on port: ${PORT}`);
});
