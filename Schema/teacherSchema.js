const mongoose = require('mongoose');

// Define teacher schema
const teacherSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
    // You can add more fields as needed
});

// Create Teacher model
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
