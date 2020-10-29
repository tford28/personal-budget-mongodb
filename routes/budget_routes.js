const express = require("express");
const router = express.Router();
const BudgetSchema = require ("../models/budget_schema");

router.post("/add", (req, res) => {
    const budget = new BudgetSchema({
        title: req.body.title,
        budget: req.body.budget,
        color: req.body.color,
    });
    budget.save().then((data) => {
        if (!data) {
            res.setMaxListeners(400).send("Unable to add new budget document");
        }
        res.json(data);
    })
    .catch((err) => {
        res.send(err)
    });
});

router.get("/fetch", (req, res) => {
    BudgetSchema.find().exec((err, data) => {
        if (err) {
            res.status(400).send("Unable to fetch budget documents");
        }
        res.json(data);
    })
});

module.exports = router;