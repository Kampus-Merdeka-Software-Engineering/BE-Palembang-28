import express from "express";
import cors from "cors";
import keluhanRoute from "./routes/keluhanRoute.js";
import dokterRoute from "./routes/dokterRoute.js";
import poliklinikRoute from "./routes/poliklinikRoute.js";

const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(keluhanRoute);
app.use(dokterRoute);
app.use(poliklinikRoute);

app.listen(port, "0.0.0.0", function () {
  console.log("Server up and running...");
});

