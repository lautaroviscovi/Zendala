import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import '../../styles.css';

export const Login = () => {
    
    const dispatch = useDispatch();

    const [ formLoginvalues, handleLoginInputChange ] = useForm( {
        email: '',
        password: ''
    } );

    const { email, password } = formLoginvalues;

    const handleLogin = ( e ) => {
        e.preventDefault();
        dispatch( startLogin( email, password ) );
    };

    return (
        <section className="section-customer">
        <div className="container has-text-centered mt-6">
              <h1><strong className='h1-login'>Welcome again!</strong></h1>
          <div className="columns is-centered mt-6">
            <div className="column is-5 is-4-desktop mt-6">
              <form
              onSubmit = { handleLogin }
              >
                <div className="field mt-6">
                  <div className="control">
                    <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    name = 'email'
                    value = { email }
                    onChange = { handleLoginInputChange }

                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    name = 'password'
                    value = { password }
                    onChange = { handleLoginInputChange }
                    />
                  </div>
                </div>
                <div className="field">
                  <button
                  className="button is-info is-light is-fullwidth"
                  type = 'submit'
                  value = 'Login'
                  >Sign in!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
};