const mongoose = require("mongoose")

const budgetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    }, 
    budget: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
        match: [/^#(?:[0-9a-fA-F]{3}){1,2}$/, "Not a valid hex color"]
    }
}, { collection: 'budgetData'})

module.exports = mongoose.model('budgetData', budgetSchema)