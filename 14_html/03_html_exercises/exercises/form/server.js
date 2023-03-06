const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/users', (req, res) => {
  console.log(req.body);
  res.send('Congrats! User included');
});

app.listen(3003);
