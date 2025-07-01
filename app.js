const express = require('express');
const app = express ();
const port = 3000;

app.use(express.json());

app.get('/',(req, res) => {
  res.send('언디야 화이팅');
});

app.listen(port,('0.0.0.0'),() => {
  console.log(`server is running on http://3.35.37.157`);
});
