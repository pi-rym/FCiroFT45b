//? Simulando una db
let favorites = [];

//? funcion auxiliar para respuesta exitosa
function sendFavorites(res) {
  res.status(200).json(favorites);
}

function postFav(req, res) {
  const character = req.body;
  favorites.push(character);
  sendFavorites(res);
}

function deleteFav(req, res) {
  const { id } = req.params;
  favorites = favorites.filter((char) => char.id !== id);
  sendFavorites(res);
}

module.exports = { postFav, deleteFav };
