const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware untuk mengizinkan CORS (Cross-Origin Resource Sharing)
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Simpan data pasien dan jadwal dokter dalam variabel 
let patients = [];
let doctorSchedules = {};

// Endpoint untuk menambahkan pasien baru
app.post('/addPatient', (req, res) => {
  const newPatient = req.body;
  patients.push(newPatient);
  res.json({ message: 'Pasien berhasil ditambahkan', data: newPatient });
});

// Endpoint untuk melihat daftar pasien
app.get('/patients', (req, res) => {
  res.json({ data: patients });
});

// Endpoint untuk menambahkan jadwal dokter
app.post('/addDoctorSchedule', (req, res) => {
  const { doctorName, schedule } = req.body;
  doctorSchedules[doctorName] = schedule;
  res.json({ message: 'Jadwal dokter berhasil ditambahkan', data: doctorSchedules });
});

// Endpoint untuk melihat jadwal dokter
app.get('/doctorSchedules', (req, res) => {
  res.json({ data: doctorSchedules });
});
   
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
