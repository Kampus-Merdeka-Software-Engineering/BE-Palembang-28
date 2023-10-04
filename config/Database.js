import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(process.env.RAILWAY_DATABASE_URL, {
  dialect: "mysql",
});

export default db;
