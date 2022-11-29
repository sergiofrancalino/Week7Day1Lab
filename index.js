//Interation 0 - Server is live
import express from "express";
import * as dotenv from "dotenv";
import processoRoute from "./routes/processo.routes.js";
// import { uuid } from "uuidv4";

//ENABLING THE SERVER (environment variables)
dotenv.config();

//INSTANTIATE the variable responsible for server -> App
const app = express();

//CONFIGURE server to sending and receiving files in JSON
app.use(express.json());

app.use("/processo", processoRoute);

// Subindo o servidor (Server UP)
app.listen(process.env.PORT, () => {
  console.log(
    `App up and running on port http://localhost:${process.env.PORT}`
  );
});
