const express = require('express');
const { validationResult } = require('express-validator');

const filesValidator = ( req, res = response, next ) => {

    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            Ok: false,
            errors: errors.mapped()
        })
    }

    next();
};


module.exports = {
    filesValidator
};