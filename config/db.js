const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.PGHOST || 'schedule-share-db.cxosecucua7u.ap-northeast-2.rds.amazonaws.com',
  user: process.env.PGUSER || 'piece24',
  password: process.env.PGPASSWORD || 'Atiyalu1242!',
  database: process.env.PGDATABASE || 'postgres',
  port: process.env.PGPORT || 5432,
  ssl: {rejectUnauthorized: false}
});

pool.on('connect', () => {
  console.log('PostgreSQL connected');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client', err);
  process.exit(-1);
});
console.log(process.env.PGUSER)

pool.query('SELECT current_database()', (err, res) => {
  if (err) {
    console.error('DB 확인 쿼리 에러:', err);
  } else {
    console.log('현재 연결된 DB:', res.rows[0]);
  }
});

pool.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';", (err, res) => {
  if (err) {
    console.error('테이블 목록 에러:', err);
  } else {
    console.log('public 스키마의 테이블 목록:', res.rows);
  }
});

module.exports = pool;
