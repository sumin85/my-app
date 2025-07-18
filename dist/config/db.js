const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.PGHOST || 'schedule-share-db.cxosecucua7u.ap-northeast-2.rds.amazonaws.com',
  user: process.env.PGUSER || 'piece24',
  password: process.env.PGPASSWORD || 'Atiyalu1242!',
  database: process.env.PGDATABASE || 'schedule-share-db',
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

module.exports = pool;
