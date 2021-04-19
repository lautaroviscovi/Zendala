const baseUrl = process.env.REACT_APP_API_URL;


export const fetchWithoutToken = ( endpoint, data, method = 'GET' ) => {
    const url = `${ baseUrl }/${ endpoint }`;

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        } )
    }
};

export const fetchWithToken = ( endpoint, data, method = 'GET' ) => {
    const url = `${ baseUrl }/${ endpoint }`;
    const token = localStorage.getItem( 'token' ) || '';

    if ( method === 'GET' ) {
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        } );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        } )
    }
};

// export const FetchCustomersWithToken = async ( method = 'GET' ) => {
//     const [customers, setCustomers] = useState( { customer: [] } );

    // const url = `${ baseUrl }/auth/users`;
    // const token = localStorage.getItem( 'token' ) || '';
    // const get = await fetch( url, {
    //     method,
        // headers: {
        //     'Content-type': 'application/json',
        //     'x-token': token
        // },
//     })

//     setCustomers( { customer: get.data } )
    
// };
    // const customers = customersData.map( customer => {
    //     return {
    //         name: customer.name,
    //         last_name: customer.last_name,
    //         email: customer.email,
    //         country_code: customer.address.country_code,
    //         state: customer.address.state,
    //         city: customer.address.city,
    //         postal_code: customer.address.postal_code,
    //         phone_number: customer.phone_number
    //     }
    // })
    // console.log(customers)
    

// fetchCustomersWithToken();