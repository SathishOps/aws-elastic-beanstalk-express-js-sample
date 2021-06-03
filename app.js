const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is mylearning in AWS- second change with final pipeline test'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
