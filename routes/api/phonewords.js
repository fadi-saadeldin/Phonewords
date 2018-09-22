const express = require('express');
const router = express.Router();
const generatePhonewords = require('../../lib/generate-phonewords');


/**
 * Routes
 */

router.get('/', (req, res) => {
  if (!req.query.numbers) return res.status(400).send('Error: No numbers sent')
  const phonewords = generatePhonewords(req.query.numbers)
  res.json(phonewords)
})

module.exports = router;