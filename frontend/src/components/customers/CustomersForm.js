/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../../styles.css';
import { NavBar } from '../navBar/NavBar';

export const CustomersForm = () => {
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
                  <form>
                    <div className="field">
                      <div className="control">
                        <input className="input" type="text" placeholder="Name" />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" type="text" placeholder="Last name" />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" type="text" placeholder="Country code" />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" type="text" placeholder="State" />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" type="text" placeholder="City" />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" type="text" placeholder="Postal code" />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <input className="input" type="tel" placeholder="Phone number" />
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