const User = require('../models/User');
const { response } = require('express');
const Openpay = require('openpay');
const openpay = new Openpay(process.env.OPP_ID, process.env.OPP_PUBLIC_KEY)

const createUser = async ( req, res = response ) => {

    const { 
            name,
            last_name,
            email,
            country_code,
            state,
            city,
            address,
            postal_code,
            phone_number
        } = req.body;
        
        try {
            let user = await User.findOne( { email } )
            
            if ( user ) {
                return res.status(400).json({
                    Ok: false,
                    msg: 'The mail is already in use'
                })
            }
            
            user = new User( req.body );
            
            let customer = openpay.customers.create(user, async () => {
            
                if( !customer){
                    res.status(400).json( {
                        Ok: false,
                        msg: 'Error bad request'
                    })
                }
                else {
                    res.status(201).json( {
                        Ok: true,
                    } );
                }
            });
            
            await user.save();
        
        res.status(201).json( {
            Ok: true,
            uid: user.id,
            name: user.name,
        } )
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            Ok: false,
            msg: 'Please contact the admin'
        })
    }
};

const getUsers = async ( req, res = response ) => {

    try {
        let users = await User.find();

        if ( !users ) {
            return res.status(404).json( {
                Ok: false,
                msg: 'There\'re no users to display'
            })
        } else {
                res.status(200).json(users)
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            Ok: false,
            msg: 'Please contact the admin'
        })
    }

};


module.exports = {
    createUser,
    getUsers,
};