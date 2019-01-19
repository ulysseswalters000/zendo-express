const express = require('express');
const router = express.Router();

// Get Landing page
// Route here refers to route specified in app.js
router.get('/', (req, res) => {
  res.sendFile('../../public/index.html');
});

module.exports = router;
