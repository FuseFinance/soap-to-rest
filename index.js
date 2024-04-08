const express = require('express');
const soap = require('soap');

const app = express();
const port = 3010;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

