const express = require('express');
const app = express ();
const port = 3000;

app.use(express.json());

app.get('/',(req, res) => {
  res.send('언디야 힘내');
});

app.listen(port,('0.0.0.0'),() => {
    console.log(`Running on port 3000`);
});
