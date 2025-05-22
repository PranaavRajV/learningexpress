const express = require('express');
const path = require('path');
const root = require('../utis/path');
const router = express.Router();

// Route to serve the add product HTML page
router.get('/addproduct', (req, res, next) => {
  res.sendFile(path.join(root, 'views', 'addproduct.html'));
});

// Route to handle the form submission
router.post('/addproduct', (req, res, next) => {
  res.send('<h1>Product Submitted</h1>'); // fixed typo
});

module.exports = router;
