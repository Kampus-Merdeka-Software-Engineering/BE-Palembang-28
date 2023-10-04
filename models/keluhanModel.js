import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;


const Keluhan = db.define('keluhan',
  {
    id_keluhan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nama_keluhan: {
      type: DataTypes.STRING,
    },
    jenis_kelamin: {
      type: DataTypes.ENUM('Perempuan', 'Laki-Laki'),
    },
    waktu_keluhan: {
      type: DataTypes.ENUM(
        '10.00 AM',
        '12.00 AM',
        '14.00 AM',
        '16.00 AM',
        '18.00 AM'
      ),
    },
    umur: {
      type: DataTypes.INTEGER,
    },
    kartu_identitas: {
      type: DataTypes.STRING,
    },
    deskripsi_keluhan: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "tb_keluhan",
    timestamps: false,
  }
);  

export default Keluhan;

(async () => {
  await db.sync();
})();