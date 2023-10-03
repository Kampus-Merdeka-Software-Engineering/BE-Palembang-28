const express = require('express')
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());
app.use(bodyParser.json());

const sequelize = new Sequelize('mysql://root:VsiNmGkhQiKvGK2gaY3Q@containers-us-west-151.railway.app:6420/railway');

const Product = sequelize.define('keluhan',
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
      type: DataTypes.ENUM('10.00 AM','12.00 AM','14.00 AM','16.00 AM','18.00 AM'),
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
    tableName: 'tb_keluhan',
    timestamps: false,
  }
);  

const runningServer = async () => {
  try {

    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    app.get('/keluhan', async (req, res) => {
  
      let keluhan = await Product.findAll();
      res.json(keluhan);
    });

    
    app.post("/keluhan", async (req, res) => {
        let data = req.body;
        let a = await Product.create({
          nama_keluhan: data.nama_keluhan,
          jenis_kelamin: data.jenis_kelamin,
          waktu_keluhan: data.waktu_keluhan,
          umur: data.umur,
          kartu_identitas: data.kartu_identitas,
          deskripsi_keluhan: data.deskripsi_keluhan,
        });
        res.json(a);
    });

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

runningServer();
