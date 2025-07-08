var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res)  => {
  const users = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
    { id: 3, name: 'c'}
  ];
  res.json(users);
});

module.exports = router;
