/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../../styles.css';
import { NavBar } from '../navBar/NavBar';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startRegister } from '../../actions/auth';

export const CustomersForm = () => {

  const dispatch = useDispatch()

  const [ formInputvalues, handleInputChange ] = useForm( {
    name: '',
    last_name: '',
    email: '',
    country_code: '',
    state: '',
    city: '',
    postal_code: '',
    phone_number: ''
  } );

  const { name,
          last_name,
          email,
          country_code,
          state,
          city,
          postal_code,
          phone_number } = formInputvalues;


  const handleRegister = ( e ) => {
    e.preventDefault()
    dispatch( startRegister( name, last_name, email, country_code, state, city, postal_code, phone_number ))
  }

    return (
        <>
        <NavBar/>
        <section className='section-customer'>
        <div className="columns is-multiline">
        <div className="column mt-6 ml-6">
          <div className="card mt-6">
            <div className="card-content">
              <div className="content">
                <p className='text-customer'>Join our network to receive our <strong>news</strong> and <strong>benefits</strong>. <br/><br/>It's free!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-three-quarters">
          <section className="section">
            <div className="container has-text-centered">
              <div className="columns is-centered">
                <img src="https://zenda.la/wp-content/uploads/2020/08/icono.png" width={350} height={85} />
                <div className="column is-5 is-4-desktop">
                  <form
                  onSubmit = { handleRegister }>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text" 
                          name = 'name'
                          placeholder="Name"
                          value = { name }
                          onChange = { handleInputChange } 
                          />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text" 
                          name = 'last_name'
                          placeholder="Last name"
                          value = { last_name }
                          onChange = { handleInputChange } />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="email"
                          name = 'email'
                          placeholder="Email"
                          value = { email }
                          onChange = { handleInputChange } />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text" 
                          name = 'country_code'
                          placeholder="Country code"
                          value = { country_code }
                          onChange = { handleInputChange } />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text" 
                          name = 'state'
                          placeholder="State"
                          value = { state }
                          onChange = { handleInputChange } />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text" 
                          name = 'city'
                          placeholder="City"
                          value = { city }
                          onChange = { handleInputChange } />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="text" 
                          name = 'postal_code'
                          placeholder="Postal code"
                          value = { postal_code }
                          onChange = { handleInputChange } />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input
                          className="input"
                          type="tel"
                          name = 'phone_number'
                          placeholder="Phone number"
                          value = { phone_number }
                          onChange = { handleInputChange } />
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control is-expanded">
                        <button className="button is-info is-light is-fullwidth">Register!</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
    </>
    )
};