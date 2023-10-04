import express from "express";
import cors from "cors";
import keluhanRoute from "./routes/keluhanRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(keluhanRoute);

app.listen(3000, () => console.log("Server up and running..."));