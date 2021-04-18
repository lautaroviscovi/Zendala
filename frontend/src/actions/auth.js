import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

/**
 * Esta función recibe el email y password del usuario.
 * Hace la petición al endpoint con el e-mail y el password.
 * Si los datos son correctos, ejecuta la acción 'login'
 * En caso de que haya errores en los datos, despliega
 * una alerta con los posibles fallos (email y/o password no hacen match)
 * @param { valor de tipo string } email 
 * @param { valor de tipo string } password
 */
export const startLogin = ( email, password ) => {
    return async ( dispatch ) => {
        
        const response = await fetchWithoutToken( 'auth' , { email, password }, 'POST' );
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

/**
 * Ésta función dispara una acción para desloguear al usuario
 * y limpiar los eventos y tokens almacenados en el localStorage
 */
export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );
        // dispatch( eventLogout() );
    }
};


/**
 * El token para mantener la sesión tiene un tiempo de caducidad.
 * Si el usuario deja caducar la sesión, ésta función le permite
 * renovar el token y mantenerse activo. La renovación del token
 * queda almacenada en el localStorage y dispara la acción de
 * finalización de la verificación.
 */
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