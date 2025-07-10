const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  // 실제 데이터 대신 예시
  res.json([{ friend: '철수', schedule: '14시 회의' }]);
});
module.exports = router;