-- Creating the database

CREATE DATABASE
    biblioteca;

-- Table "autores"

CREATE TABLE
    autores (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(200) NOT NULL,
      idade INTEGER
    );

-- Table "books"

CREATE TABLE
	livros (
        id SERIAL PRIMARY KEY,
        nome TEXT NOT NULL,
        genero TEXT,
        editora TEXT,
        data_publicacao DATE,
        autor_id INTEGER REFERENCES autores (id)
    );