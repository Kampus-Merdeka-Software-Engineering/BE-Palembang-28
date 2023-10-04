import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Poliklinik = db.define(
  "poliklinik",
  {
    id_poliklinik: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nama_poliklinik: {
      type: DataTypes.STRING,
    },
    deskripsi_poliklinik: {
      type: DataTypes.TEXT,
    },
    gambar_poliklinik: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "tb_poliklinik",
    timestamps: false,
  }
);

export default Poliklinik;

(async () => {
  await db.sync();
})();
