var express = require('express');
var router = express.Router();
const db = require('../config/db');



/**
 * @swagger
* /api/users:
 *   post:
 *     summary: 사용자 생성
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: 생성 성공
 */
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await db.query('INSERT INTO public."Admin" (name, email, password) VALUES ($1, $2, $3)', [name,email,password]);
    res.status(201).json({ message: '사용자 생성 성공' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: 전체 사용자 조회
 *     responses:
 *       200:
 *         description: 사용자 목록
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM public."Admin"');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: 사용자 상세 조회
 *     parameters:
 *       - in: path 
 *         name: id
 *         required: true 
 *         schema:
 *           type: integer
 *     responses:
 *       200: 
 *         description: 사용자 정보
 */
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM public."Admin" WHERE id = $1', [id]);
    if (result.rows.length === 0) { 
      return res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: 사용자 정보 수정
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: 수정 성공
 */
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    await db.query(
      'UPDATE public."Admin" SET name = $1, email = $2, password = $3 WHERE id = $4',
      [name, email, password, id]
    );
    res.json({ message: '사용자 정보 수정 성공' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: 사용자 삭제
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: 삭제 성공
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM public."Admin" WHERE id = $1', [id]);
    res.json({ message: '사용자 삭제 성공' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req,res) => {
  const result = await db.query('SELECT * FROM public."Admin"');
  res.json(result.rows);
});

module.exports = router;