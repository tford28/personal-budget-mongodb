const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
const chartDataModel = require ("./models/budget_schema")

const url = 'mongodb://localhost:27017/mongodb_budget'
const port = 3000;

app.use("/", express.static('public'));

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});

app.get('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            budgetDataModel.find({})
                .then((data) => {
                    res.json(data);
                    mongoose.connection.close()
                })
                .catch((connectionError) => {
                    res.send(connectionError)
                })
        })
        .catch ((connectionError) => {
            res.send(connectionError)
        });
});
