const mongoose = require('mongoose');

// Define child schema
const childSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        required: true
    }
});

// Create Child model
const Child = mongoose.model('Child', childSchema);

module.exports = Child;