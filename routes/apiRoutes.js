/*
 * Router File
 */
var router = require('express').Router();

router.post('/register', (req, res) => {
  res.json(req.body);
});

module.exports = router;
