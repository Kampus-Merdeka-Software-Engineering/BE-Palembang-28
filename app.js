const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const morgan = require('morgan')
const orderRoutes = require('./api/routes/orders');
const port = 3000;

app.use(morgan('dev'));

// Gunakan middleware bodyParser untuk mengurai body JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.header('access-Control-Allow-Origin','*')//masukkin database//;
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With,Content-Type,Accept,Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Method','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});

    }
    next();
});
// Routes which should handle request
app.use('/product',productRoutes);
app.use('/orders',orderRoutes);

app.use((req,res,next) => {
    const error = new Error('not found');
    error.status(404);
    next (error);
})


app.use((error,req,res,next) => {
res.atatus(error.status || 500)
res.json({
    error:{
        message: error.message
    }
});
});
// Simpan data janji temu pasien dalam array
const appointments = [];

// Route untuk menampilkan daftar janji temu
app.get('/appointments', (req, res) => {
  res.json(appointments);
});

// Route untuk membuat janji temu baru
app.post('/appointments', (req, res) => {
  const { patientName, appointmentDate } = req.body;
  const appointment = { patientName, appointmentDate };
  appointments.push(appointment);
  res.json({ message: 'Janji temu berhasil dibuat.', appointment });
});

// Route untuk menghapus janji temu berdasarkan indeks
app.delete('/appointments/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < appointments.length) {
    const deletedAppointment = appointments.splice(index, 1);
    res.json({ message: 'Janji temu berhasil dihapus.', deletedAppointment });
  } else {
    res.status(404).json({ message: 'Janji temu tidak ditemukan.' });
  }
});

// Server berjalan di port 3000
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
