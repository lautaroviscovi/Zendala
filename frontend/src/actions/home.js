import { fetchWithToken } from "../helpers/fetch";
import { homeReducer } from "../reducers/homeReducer";
import { types } from "../types/types";
const baseUrl = process.env.REACT_APP_API_URL;

export const fetchCustomers = async (method = 'GET') => {
    // return async ( dispatch ) => {

        const url = `${ baseUrl }/auth/users`;
        
        const token = localStorage.getItem( 'token' ) || '';
        
        const res = await fetchWithToken( url, { method, headers: { 'Content-type': 'application/json', 'x-token': token },})
    
        const customersData = await res.json();
        console.log(customersData)

    //     dispatch( homeReducer(customer))

    // }
    
};
fetchCustomers()
const customer = () => ( {
    types: types.homeData,
} )