import React from 'react';

const baseUrl = process.env.REACT_APP_API_URL;

async function fetchData (method = 'GET') {
    const url = `${ baseUrl }/auth/users`;
    
    const token = localStorage.getItem( 'token' ) || '';

    const res = await fetch( url, {
        method,
        headers: {
            'Content-type': 'application/json',
            'x-token': token
        },
    })
    const customersData = await res.json();
    console.log(customersData)

    return customersData;
}
fetchData()

export const Home = () => {

        return (
            <div className="columns is-multiline">
            <div className="column is-6-tablet">
                <h1>hi</h1>
            </div>
            <div className="column is-6-tablet">
                <h1>mate!</h1>
            </div>
        </div>
    )
};