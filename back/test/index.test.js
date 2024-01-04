//? importo el servidor
const server = require("../src/server");
//? importo a supertest
const session = require("supertest");
//? configuro el entorno de supertest
const agent = session(server);

describe("Testeando rutas", () => {
  describe("Testeando que GET /rickandmorty/character/:id funciona", () => {
    it("Responde con un status 200 para el character con id 1", async () => {
      try {
        const result = await agent.get("/rickandmorty/character/1");
        expect(result.statusCode).toBe(200);
      } catch (err) {
        throw new Error(err);
      }
    });
    it("Responde con un objeto con propiedades id, name, origin, genre, status, image, species", async () => {
      try {
        const { body } = await agent.get("/rickandmorty/character/1");
        expect(body).toHaveProperty("id");
        expect(body).toHaveProperty("name");
        expect(body).toHaveProperty("status");
        expect(body).toHaveProperty("image");
        expect(body).toHaveProperty("origin");
        expect(body).toHaveProperty("species");
        expect(body).toHaveProperty("gender");
        expect(body).not.toHaveProperty("age");
      } catch (err) {
        throw new Error(err);
      }
    });
  });
  describe("Testeando login", () => {});
  describe("Testeando postFav", () => {});
  describe("Testeando deleteFav", () => {});
});
