const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { filesValidator } = require('../middlewares/files-validator');
const { createAdmin, login, renewToken } = require("../controllers/admin.controller");
const { validateJWT } = require('../middlewares/validate-jwt');


router.post( '/new', 
    [
    check('email', 'E-mail is required').isEmail(),
    check('password', 'Password is required and must contain at least 6 characters ').isLength({ min: 6}),
        filesValidator
    ],
        createAdmin );

router.post( '/',
    [ 
        check('email', 'E-mail is required').isEmail(),
        check('password', 'Password is required and must contain at least 6 characters ').isLength({ min: 6}),
            filesValidator
    ],
            login );

router.get( '/renew', validateJWT, renewToken );

module.exports = router;