const express = require("express");
const rotas = express();

const { addAutor, encontrarAutor } = require("../controladores/autor");
const { addLivro, buscarTodosLivros } = require("../controladores/livro");

rotas.post("/autor", addAutor);
rotas.get("/autor/:id", encontrarAutor);
rotas.post("/autor/:id/livro", addLivro);
rotas.get("/livro", buscarTodosLivros);

module.exports = rotas;
