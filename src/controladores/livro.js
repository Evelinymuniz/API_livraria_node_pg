const { pool } = require("../database/conexao");
const { inserirLivro, buscarLivros } = require("../database/databaseComandos");

async function addLivro(req, res) {
    const { nome, genero, editora, data_publicacao } = req.body;
    const { id } = req.params;

    if (!nome) {
        return res.status(400).json({ message: "name not given" });
    }

    try {
        const resultado = await pool.query(inserirLivro, [
            nome,
            genero,
            editora,
            data_publicacao,
            id,
        ]);

        const mostrarResultado = {
            id: resultado.rows[0].id,
            nome: resultado.rows[0].nome,
            genero: resultado.rows[0].genero,
            editora: resultado.rows[0].editora,
            data_publicacao: resultado.rows[0].data_publicacao,
        };

        return res.status(201).json(mostrarResultado);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function buscarTodosLivros(_, res) {
    try {
        const resultado = await pool.query(buscarLivros);

        return res.status(200).json(resultado.rows);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    addLivro,
    buscarTodosLivros,
};
