const express = require('express');
const app = express();
const port = 7865;

app.get('/', (req, res) => {
 res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (!isNaN(id) && Number(id).toString() === id) {
    return res.send(`Payment methods for cart ${id}`);
  }
  return res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
