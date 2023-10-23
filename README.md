**### Projeto API Biblioteca 📚💻**

Bem-vindo ao Projeto API Biblioteca, onde a magia da leitura encontra a tecnologia da informação! 🚀

## Sobre o Projeto
Este projeto tem como objetivo criar uma API para um sistema de bibliotecas, conectando-se a um banco de dados PostgreSQL chamado "biblioteca". A implementação deve ser organizada, legível e mágica!

## Como Começar
1. Clone o repositório: `git clone https://github.com/Evelinymuniz/api-biblioteca.git`
2. Entre no diretório: `cd api-biblioteca`
3. Execute `npm install` para instalar as dependências mágicas.

## Banco de Dados
O arquivo `dump.sql` contém toda a magia para criar as tabelas necessárias. Execute-o no seu banco PostgreSQL:

```bash
psql -U Evelinymuniz -d biblioteca -a -f dump.sql
```

## Funcionalidades 🎉
1. **Cadastro de Autores**
   - Endpoint: `POST /autor`
   - Exemplo de entrada:

     ```json
     {
         "nome": "Carlos Andre",
         "idade": 32
     }
     ```

   - Exemplo de saída:

     ```json
     {
         "id": 1,
         "nome": "Carlos Andre",
         "idade": 32
     }
     ```

     ou

     ```json
     {
         "mensagem": "O campo nome é obrigatório."
     }
     ```

2. **Busca de Autor por ID**
   - Endpoint: `GET /autor/:id`
   - Exemplo de saída:

     ```json
     {
         "id": 1,
         "nome": "Carlos Andre",
         "idade": 32,
         "livros": [
             {
                 "id": 1,
                 "nome": "Backend Nodejs",
                 "genero": "Programação",
                 "editora": "Cubos Academy",
                 "data_publicacao": "2018-06-10"
             },
             {
                 "id": 2,
                 "nome": "Backend PHP",
                 "genero": "Programação",
                 "editora": "Cubos Academy",
                 "data_publicacao": "2020-10-18"
             }
         ]
     }
     ```

     ou

     ```json
     {
         "mensagem": "Autor não encontrado"
     }
     ```

3. **Cadastro de Livros para um Autor**
   - Endpoint: `POST /autor/:id/livro`
   - Exemplo de entrada:

     ```json
     {
         "nome": "Backend PHP",
         "genero": "Programação",
         "editora": "Cubos Academy",
         "data_publicacao": "2020-10-18"
     }
     ```

   - Exemplo de saída:

     ```json
     {
         "id": 2,
         "nome": "Backend PHP",
         "genero": "Programação",
         "editora": "Cubos Academy",
         "data_publicacao": "2020-10-18"
     }
     ```

     ou

     ```json
     {
         "mensagem": "O campo nome é obrigatório."
     }
     ```

4. **Listagem de Livros com Informações do Autor**
   - Endpoint: `GET /livro`
   - Exemplo de saída:

     ```json
     [
         {
             "id": 1,
             "nome": "Backend Nodejs",
             "genero": "Programação",
             "editora": "Cubos Academy",
             "data_publicacao": "2018-06-10",
             "autor": {
                 "id": 1,
                 "nome": "Carlos Andre",
                 "idade": 32
             }
         },
         {
             "id": 2,
             "nome": "Backend PHP",
             "genero": "Programação",
             "editora": "Cubos Academy",
             "data_publicacao": "2020-10-18",
             "autor": {
                 "id": 1,
                 "nome": "Carlos Andre",
                 "idade": 32
             }
         }
     ]
     ```

     ou

     ```json
     []
     ```

## Contribuindo 🤖
Sinta-se à vontade para contribuir com mais mágica! Faça um fork, crie uma branch mágica e abra um Pull Request incrível! 🌟
