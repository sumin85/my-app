const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.json([{ group: '스터디', status: '투표중' }]);
});
module.exports = router;