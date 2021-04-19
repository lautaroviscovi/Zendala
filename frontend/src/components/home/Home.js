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
            setCustomers({ users: response.data });
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
                <th>Line 1</th>
                <th>City</th>
                <th>Phone number</th>
              </tr>
            </thead>
            <tbody>
            {customers.users.map( ( customer ) => (
                            <tr key={customer.id}>
                                <td>{customer.name}</td>
                            </tr>
                        ))}
              <tr>
              {customers.users.map( ( customer ) => (
                            <tr key={customer.id}>
                                <td>{customer.name}</td>
                            </tr>
                        ))}
              </tr>
              <tr>
                <td>Lorem ipsum - cell A2</td>
                <td>Lorem ipsum - cell B2</td>
                <td>Lorem ipsum - cell C2</td>
                <td>Lorem ipsum - cell D2</td>
                <td>Lorem ipsum - cell E2</td>
              </tr>
              <tr>
                <td>Lorem ipsum - cell A3</td>
                <td>Lorem ipsum - cell B3</td>
                <td>Lorem ipsum - cell C3</td>
                <td>Lorem ipsum - cell D3</td>
                <td>Lorem ipsum - cell E3</td>
              </tr>
              <tr>
                <td>Lorem ipsum - cell A4</td>
                <td>Lorem ipsum - cell B4</td>
                <td>Lorem ipsum - cell C4</td>
                <td>Lorem ipsum - cell D4</td>
                <td>Lorem ipsum - cell E4</td>
              </tr>
              <tr>
                <td>Lorem ipsum - cell A5</td>
                <td>Lorem ipsum - cell B5</td>
                <td>Lorem ipsum - cell C5</td>
                <td>Lorem ipsum - cell D5</td>
                <td>Lorem ipsum - cell E5</td>
              </tr>
              <tr>
                <td>Lorem ipsum - cell A6</td>
                <td>Lorem ipsum - cell B6</td>
                <td>Lorem ipsum - cell C6</td>
                <td>Lorem ipsum - cell D6</td>
                <td>Lorem ipsum - cell E6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

        )
    };
    // <div>
    //     <tbody>
    //                     {customers.users.map((cliente) => (
    //                         <tr key={cliente.id}>
    //                             <td>{cliente.name}</td>
    //                             <td>{cliente.last_name}</td>
    //                             <td>{cliente.email}</td>
    //                             <td>{cliente.phone_number}</td>
    //                         </tr>
    //                     ))}
    //                 </tbody>
    // </div>