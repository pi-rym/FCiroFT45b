require("dotenv").config();
const { URL, API_KEY, QUERY_KEY } = process.env;
const urlCharacterId = (id) => `${URL}/${id}?${QUERY_KEY}=${API_KEY}`;
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
};
module.exports = {
  urlCharacterId,
  headers,
};
