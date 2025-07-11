var express = require('express');
var router = express.Router();

/* GET users listing. */

// routes/users.js
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: 유저 목록 조회
 *     responses:
 *       200:
 *         description: 성공
 */
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
    { id: 3, name: 'c'}
]);
});

module.exports = router;
