import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { startLogout } from '../../actions/auth';
import { useDispatch } from 'react-redux';
const baseUrl = process.env.REACT_APP_API_URL;

export const Home = () => {
    
    const dispatch = useDispatch();

    const [ customers, setCustomers]  = useState({ users: [] });
    
    const get = () => {
        const url = `${ baseUrl }/auth/users`;
    
        const token = localStorage.getItem( 'token' ) || '';
        
        axios.get(url, {
        headers: {
            'Content-type': 'application/json',
            'x-token': token
        }
        }).then((response) => {
            setCustomers( { users: response.data } );
        });
    };
    
    useEffect(() => {
        
        get();        
    
    }, [] );    

    const handleLogout = ( e ) => {
        e.preventDefault();
        dispatch( startLogout() );
    }

    return (
        <div>
          <div className="section-customer">
          <div
            id="nav-button"
            className="buttons is-pulled-right button is-rounded"
            onClick = { handleLogout }
            >
                LOGOUT
                </div>
          <br/>
          <br/>
          </div>
        <div className="demo">
          <table className="table is-responsive">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Country code</th>
                <th>State</th>
                <th>City</th>
                <th>ZIP</th>
                <th>Phone number</th>
              </tr>
            </thead>
            <tbody>
            {customers.users.map( ( customer ) => (
                            <tr key={customer.id}>
                                <td>{customer.name}</td>
                                <td>{customer.last_name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.country_code}</td>
                                <td>{customer.state}</td>
                                <td>{customer.city}</td>
                                <td>{customer.postal_code}</td>
                                <td>{customer.phone_number}</td>
                            </tr>
                        ))}
            </tbody>
          </table>
        </div>
      </div>
    )
};





// const [ customers, setCustomers]  = useState({ users: [] });
    
//     const get = () => {
//         const url = `${ baseUrl }/auth/users`;
    
//         const token = localStorage.getItem( 'token' ) || '';
        
//         fetch(url, {
//         headers: {
//             'Content-type': 'application/json',
//             'x-token': token
//         }
//         }).then((response) => {
//             setCustomers( { users: response.data } );
//         });
//     };
    
//     useEffect(() => {
        
//         get();        
    
//     }, [] ); 