var express = require('express');
var router = express.Router();

/* POST guardians */
router.post('/', function(req, res, next) {
  res.status(201).send(`POST received with: ${JSON.stringify(req.body)}`);
});

module.exports = router;
