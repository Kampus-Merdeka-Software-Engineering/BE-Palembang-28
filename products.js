// Import modul Express
const express = require('express');
const router = express.Router();

// Simpan data produk dalam array (contoh sederhana)
const products = [
  { id: 1, name: 'Obat A', price: 10.0 },
  { id: 2, name: 'Obat B', price: 15.0 },
  { id: 3, name: 'Alat Pemeriksaan', price: 50.0 },
];

// Route untuk mendapatkan semua produk
router.get('/', (req, res) => {
  res.json(products);
});

// Route untuk mendapatkan produk berdasarkan ID
router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: 'Produk tidak ditemukan.' });
  }
  res.json(product);
});

// Tambahkan produk baru
router.post('/', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.json({ message: 'Produk berhasil ditambahkan.', newProduct });
});

// Update produk berdasarkan ID
router.put('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: 'Produk tidak ditemukan.' });
  }
  const { name, price } = req.body;
  product.name = name || product.name;
  product.price = price || product.price;
  res.json({ message: 'Produk berhasil diperbarui.', product });
});

// Hapus produk berdasarkan ID
router.delete('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === productId);
  if (index !== -1) {
    const deletedProduct = products.splice(index, 1);
    res.json({ message: 'Produk berhasil dihapus.', deletedProduct });
  } else {
    res.status(404).json({ message: 'Produk tidak ditemukan.' });
  }
});

module.exports = router;
