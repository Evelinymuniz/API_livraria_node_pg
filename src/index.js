const express = require("express");
const app = express();

const rotas = require("./rotas/rotas");

const PORT = 3001;

app.use(express.json());
app.use(rotas);

app.listen(PORT, () => console.log(`Listenig on Port: ${PORT}\n`));
