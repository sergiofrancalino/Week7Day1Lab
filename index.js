//Interation 0 - Server is live
import express from "express";
import * as dotenv from "dotenv";
// import { uuid } from "uuidv4";

//ENABLING THE SERVER (environment variables)
dotenv.config();

//INSTANTIATE the variable responsible for server -> App
const app = express();

//CONFIGURE server to sending and receiving files in JSON 
app.use(express.json());

//Database 
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

//ROUTES CREATION - Intaration 1
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
