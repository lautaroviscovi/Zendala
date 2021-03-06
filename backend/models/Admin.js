const { Schema, model} = require('mongoose');

const AdminSchema = Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    
});

module.exports = model('Admin', AdminSchema);