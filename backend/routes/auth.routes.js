const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');
const { filesValidator } = require('../middlewares/files-validator');
const { createUser,
        getUsers,
        } = require('../controllers/auth.controller');
const { validateJWT } = require('../middlewares/validate-jwt');


router.post( '/new', 
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'E-mail is required').isEmail(),
            filesValidator
    ],
            createUser );


router.get( '/users', validateJWT,
            getUsers )


module.exports = router;