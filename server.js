const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

console.log('Hello World!');
console.log("muskan nareliya");

console.log("changes on server");

console.log("demo2 added this line");
