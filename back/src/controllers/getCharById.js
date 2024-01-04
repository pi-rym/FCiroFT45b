const axios = require("axios");
const { urlCharacterId } = require("../utils/reusable");
const { headers } = require("../utils/reusable");

//? con express
//? Con promesas
/* function getCharById(req, res) {
  const { id } = req.params;
  axios(urlCharacterId(id))
    .then((res) => res.data)
    .then((character) => {
      if (character.name) {
        const personaje = {
          id: id,
          name: character.name,
          status: character.status,
          gender: character.gender,
          species: character.species,
          origin: character.origin,
          location: character.location,
          image: character.image,
        };
        res.json(personaje);
      } else {
        res.status(404).send("Character not found");
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
} */
//? con async await
async function getCharById(req, res) {
  try {
    const { id } = req.params;
    const result = await axios(urlCharacterId(id));
    const character = result.data;
    if (character.name) {
      const personaje = {
        id: id,
        name: character.name,
        status: character.status,
        gender: character.gender,
        species: character.species,
        origin: character.origin,
        location: character.location,
        image: character.image,
      };
      res.status(200).json(personaje);
    } else {
      res.status(404).send("Character not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

//? con web server
/* function getCharById(res, id) {
  axios(urlCharacterId(id))
    .then((res) => res.data)
    .then((character) => {
      if (character.name) {
        res.writeHead(200, headers);
        const personaje = {
          id: id,
          name: character.name,
          status: character.status,
          gender: character.gender,
          species: character.species,
          origin: character.origin,
          location: character.location,
          image: character.image,
        };
        res.write(JSON.stringify(personaje));
        res.end();
      } else {
        throw new Error(`No hay personajes con el id: ${id}`);
      }
    })
    .catch((err) => {
      res.writeHead(400, headers);
      res.write(JSON.stringify({ message: err.message }));
      res.end();
    });
} */

// then retorna una nueva promesa
// como?
// map retorna un nuevo arreglo? porque? -> porque quien creo el metodo asi lo definio

module.exports = getCharById;
