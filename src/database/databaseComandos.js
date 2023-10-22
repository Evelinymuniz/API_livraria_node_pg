const inserirAutor = `
    INSERT INTO
        autores (nome, idade)
    VALUES
        ($1, $2)
    RETURNING
        *
`;

const buscarAutorPorid = `
    SELECT
        *
    FROM
        autores
    WHERE
        id = $1
`;

const inserirLivro = `
    INSERT INTO
        livros (nome, genero, editora, data_publicacao, autor_id)
    VALUES
        ($1, $2, $3, $4, $5)
    RETURNING
        *
`;

const buscarLivroPorAutorid = `
    SELECT
        *
    FROM
        livros
    WHERE
        autor_id = $1
`;

const buscarLivros = `
    SELECT
        *
    FROM
        livros
`;

module.exports = {
    inserirAutor,
    buscarAutorPorid,
    inserirLivro,
    buscarLivroPorAutorid,
    buscarLivros,
};
