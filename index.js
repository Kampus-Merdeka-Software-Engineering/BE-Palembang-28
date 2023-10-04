import express from "express";
import cors from "cors";
import keluhanRoute from "./routes/keluhanRoute.js";

const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(keluhanRoute);

app.listen(port, "0.0.0.0", function () {
  console.log("Server up and running...");
});
