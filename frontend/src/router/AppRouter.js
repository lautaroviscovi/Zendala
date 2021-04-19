import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from "react-router-dom";

import { startChecking } from '../actions/auth';
import { Login } from '../components/auth/Login';
import { CustomersForm } from '../components/customers/CustomersForm';
import { Home } from '../components/home/Home';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    
    const { checking, uid } = useSelector( state => state.auth );

    useEffect( () => {
        
        dispatch( startChecking() );

    }, [ dispatch ] );

    if ( checking ) {
        return <h5> Wait... </h5>
    }

    return (
            <Router>
                <div>
                    <Switch>
                        
                        <PublicRoute path = '/'
                        exact component = { CustomersForm }
                        />

                        <PublicRoute path = '/auth/login'
                        component = { Login }
                        isAuthenticated = { !!uid }
                        />
                    

                        <PrivateRoute
                        exact
                        path = '/home'
                        component = { Home }
                        isAuthenticated = { !!uid }
                        />

                        <Redirect to = '/' />

                    </Switch>
                </div>
            
            </Router>
    )
};