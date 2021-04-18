const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const { response } = require('express');
const { generateJWT } = require('../helpers/jwt');

const createAdmin = async ( req, res = response ) => {

    const {  email, password } = req.body;
    
    try {
        let admin = await Admin.findOne({ email })

        if ( admin ) {
            return res.status(400).json({
                Ok: false,
                msg: 'The mail is already in use'
            })
        }
        
        admin = new Admin( req.body );

        const salt = bcrypt.genSaltSync();
        admin.password = bcrypt.hashSync( password, salt );
    
        await admin.save();

        const token = await generateJWT( admin.id, admin.name );
    
        res.status(201).json( {
            Ok: true,
            uid: admin.id,
            name: admin.name,
            token
        } )
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            Ok: false,
            msg: 'Please contact the admin'
        })
    }
};

const login = async ( req, res = response ) => {

    const { email, password } = req.body;

    try {

        let admin = await Admin.findOne({ email })

        if ( !admin ) {
            return res.status(400).json({
                Ok: false,
                msg: 'User or Password does not match'
            })
        }

        const validPassword = bcrypt.compareSync( password, admin.password );

        if ( !validPassword ) {
            return res.status(400).json({
                Ok: false,
                msg: 'Password not match'
            });
        }

        const token = await generateJWT( admin.id, admin.name );


        res.json({
            Ok: true,
            uid: admin.id,
            name: admin.name,
            token
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            Ok: false,
            msg: 'Please contact the admin'
        })
    }

};


const renewToken =  async ( req, res = response ) => {

    const { uid, name } = req;

    const token = await generateJWT( uid, name );

    res.json( {
        Ok: true,
        uid,
        name,
        token
    } )
};


module.exports = {
    createAdmin,
    login,
    renewToken,
};