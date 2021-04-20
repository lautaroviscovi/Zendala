import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = ( email, password ) => {
    return async ( dispatch ) => {
        
        const response = await fetchWithoutToken( 'adm' , { email, password }, 'POST' );
        const body = await response.json();

        if ( body.Ok ) {
            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );

            dispatch( login( { 
                uid: body.uid,
                name: body.name
             } ) );
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
};

export const startChecking = () => {
    return async ( dispatch ) => {
        
        const response = await fetchWithToken( 'adm/renew' );
        const body = await response.json();
        
        if ( body.Ok ) {
            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            
            dispatch( login( { 
                uid: body.uid,
                name: body.name
            } ) );
        } else {
            dispatch( checkingFinish() );
        }
    }
};

export const startRegister = ( name, last_name, email, country_code, state, city, postal_code, phone_number ) => {
    return async ( dispatch ) => {
        
        const response = await fetchWithoutToken( 'auth/new' , { name, last_name, email, country_code, state, city, postal_code, phone_number }, 'POST' );
        const body = await response.json();
        
        if ( body.Ok ) {
            console.log('Registro completo!')
            
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
};

export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );

    }
};


const login = ( user ) => ( { 
    type: types.authLogin,
    payload: user
 } );

const logout = () => ( { 
    type: types.authLogout
 } )

const checkingFinish = () => ( {
    type: types.authCheckingFinish
 } );