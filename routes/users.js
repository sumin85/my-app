var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res)  => {
  res.send('User API works!');
  res.json([
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
    { id: 3, name: 'c'}
  ]);
});

module.exports = router;
