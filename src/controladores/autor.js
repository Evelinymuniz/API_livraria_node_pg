const { pool } = require("../database/conexao");
const {
    inserirAutor,
    buscarAutorPorid,
    buscarLivroPorAutorid,
} = require("../database/databaseComandos");

async function addAutor(req, res) {
    const { nome, idade } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: "Nome não encontrado" });
    }

    try {
        const resultado = await pool.query(inserirAutor, [nome, idade]);
        const autor = resultado.rows[0];

        return res.status(201).json(autor);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno no servidor" });
    }
}

async function encontrarAutor(req, res) {
    const { id } = req.params;
    const livros = [];

    try {
        const resultadoAutor = await pool.query(buscarAutorPorid, [id]);

        if (resultadoAutor.rows.length === 0) {
            return res.status(404).json({ messagem: "Autor não encontrado" });
        }

        const resultadoLivros = await pool.query(buscarLivroPorAutorid, [id]);

        const autor = resultadoAutor.rows[0];
        autor.livros = resultadoLivros.rows;

        res.json(autor);

    } catch (error) {
        return res.status(500).json({ messagem: "Erro interno no servidor" });
    }
}

module.exports = {
    addAutor,
    encontrarAutor,
};
