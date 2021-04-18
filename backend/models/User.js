const { Schema, model} = require('mongoose');

const UserSchema = Schema({

    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        country_code: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        line1: {
            type: String,
        },
        line2: {
            type: String,
        },
        postal_code: {
            type: String,
            required: true
        },
    },
    phone_number: {
        type: Number,
    },
    
});

module.exports = model('User', UserSchema);