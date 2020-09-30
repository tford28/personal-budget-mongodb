const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req,res) => {
    var budget = require("./budget.json");
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`)
});
      