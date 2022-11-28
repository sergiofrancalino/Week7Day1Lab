//ARQUIVO PRINCIPAL
import express from "express";
import * as dotenv from "dotenv";
// import { uuid } from "uuidv4";

//habilitar o servidor a ter variáveis de ambiente
dotenv.config();

//instanciar a variável que vai ficar responsável pelo nosso servidor -> app
const app = express();

//configurar o servidor para aceitar enviar e receber arquivos em JSON
app.use(express.json());

//banco de dados
const bancoDados = [
  {
    id: "ee5999d7-02e9-4b3d-a1ab-f067eef54173",
    documentName: "Licitação Compras - Ar Condicionado",
    status: "Finalizado",
    details: "Processo de licitação para compra de ar-condicionado",
    dateInit: "15/11/2022",
    comments: ["Processo em aberto", "Processo finalizado"],
    dateEnd: "25/11/2022",
    setor: "trj",
  },
];

//CRIAÇÃO DAS ROTAS
//GET - all
app.get("/all", (req, res) => {
  return res.status(200).json(bancoDados);
});

//POST - create
app.post("/create", (req, res) => {
  const form = req.body;
  bancoDados.push(form);
  return res.status(201).json(bancoDados);
});

// Subindo o servidor (Server UP)
app.listen(process.env.PORT, () => {
  console.log(
    `App up and running on port http://localhost:${process.env.PORT}`
  );
});
