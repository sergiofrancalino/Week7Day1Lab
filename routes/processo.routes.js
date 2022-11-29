import { Express } from "express";

const userRoute = express.Router();

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
  
  
//ROUTES CREATION - Intaration 1 - line 31 to 63
//GET - all process in database
app.get("/all", (req, res) => {
    return res.status(200).json(bancoDados);
  });
  
  //POST - create a process
  app.post("/create", (req, res) => {
    const form = req.body;
    bancoDados.push(form);
    return res.status(201).json(bancoDados);
  });
  
  //PUT - Edit a process by id
  app.put("/edit/:id", (req, res) => {
    const { id } = req.params;
    const editById = bancoDados.find((process) => process.id === id);
    const index = bancoDados.indexOf(editById);
    bancoDados[index] = {
      ...editById,
      ...req.body, // That I want to edit
    };
    return res.status(200).json(bancoDados[index]);
  });
  
  //DELETE a process by id
  app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    const deleteById = bancoDados.find((process) => process.id === id);
    const index = bancoDados.indexOf(deleteById);
    bancoDados.splice(index, 1); //That I want remove/delete
    return res.status(200).json(bancoDados);
  });
  
  //Interartion 2 - GET, PUT, GET e GET a process
  //GET a process by ID
  app.get("/process/:id", (req, res) => {
    const { id } = req.params;
    const accessById = bancoDados.find((process) => process.id === id);
    if (!accessById) {
      return res.status(404).json({ message: "Process not found!" });
    }
    return res.status(200).json(accessById);
  });
  
  //PUT -> Add a comment to array of comments by id
  app.put("/addComment/:id", (req, res) => {
    const { id } = req.params;
    const comment = req.body.comment;
  
    const commentById = bancoDados.find((process) => process.id === id);
    const index = bancoDados.indexOf(commentById);
    const updateComment = bancoDados[index].comments.push(comment);
    return res.status(201).json(updateComment);
  });
  
  //GET - Process by status = open
  app.get("/status/open", (req, res) => {
    const { status } = req.params;
    const inProgress = bancoDados.find((process) => process.status === "Em andamento")
    if (!inProgress) {
      return res.status(404).json({ message: "Process not found!" });
    }
    return res.status(200).json(inProgress);
  });
  
  //GET - Process by status = close
  app.get("/status/close", (req, res) => {
    const { status } = req.params;
    const finished = bancoDados.find((process) => process.status ===  "Finalizado")
    if (!finished) {
      return res.status(404).json({ message: "Process not found!" });
    }
    return res.status(200).json(finished);
  });
  






export default userRoute;
