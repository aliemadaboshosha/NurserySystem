

const mongoose = require('mongoose');

// Define class schema
const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    // You can add more fields as needed
});

// Create Class model
const Class = mongoose.model('Class', classSchema);

module.exports = Class;