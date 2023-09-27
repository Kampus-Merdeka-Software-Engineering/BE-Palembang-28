// Import modul Express
const express = require('express');
const router = express.Router();

// Simpan data pesanan dalam array (contoh sederhana)
const orders = [
  { id: 1, patientName: 'Pasien A', appointmentDate: '2023-09-30' },
  { id: 2, patientName: 'Pasien B', appointmentDate: '2023-10-05' },
  { id: 3, productName: 'Obat C', quantity: 2 },
];

// Route untuk mendapatkan semua pesanan
router.get('/', (req, res) => {
  res.json(orders);
});

// Route untuk mendapatkan pesanan berdasarkan ID
router.get('/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const order = orders.find((o) => o.id === orderId);
  if (!order) {
    return res.status(404).json({ message: 'Pesanan tidak ditemukan.' });
  }
  res.json(order);
});

// Tambahkan pesanan baru
router.post('/', (req, res) => {
  const { patientName, appointmentDate, productName, quantity } = req.body;
  
  if (!patientName && !productName) {
    return res.status(400).json({ message: 'Harus mencantumkan nama pasien atau produk.' });
  }

  const newOrder = {
    id: orders.length + 1,
    patientName,
    appointmentDate,
    productName,
    quantity,
  };
  orders.push(newOrder);
  res.json({ message: 'Pesanan berhasil ditambahkan.', newOrder });
});

// Hapus pesanan berdasarkan ID
router.delete('/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const index = orders.findIndex((o) => o.id === orderId);
  if (index !== -1) {
    const deletedOrder = orders.splice(index, 1);
    res.json({ message: 'Pesanan berhasil dihapus.', deletedOrder });
  } else {
    res.status(404).json({ message: 'Pesanan tidak ditemukan.' });
  }
});

module.exports = router;
