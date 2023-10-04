import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Dokter = db.define(
  "dokter",
  {
    id_dokter: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nama_dokter: {
      type: DataTypes.STRING,
    },
    alumni_dokter: {
      type: DataTypes.STRING,
    },
    deskripsi_dokter: {
      type: DataTypes.TEXT,
    },
    id_poliklinik: {
      type: DataTypes.INTEGER,
    },
    gambar_dokter: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "tb_dokter",
    timestamps: false,
  }
);

export default Dokter;

(async () => {
  await db.sync();
})();
