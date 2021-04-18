/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';

export const NavBar = () => {
    return (
        <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <img
                    src="https://zenda.la/wp-content/uploads/2020/08/logotipo-zendala-negro.png" width="132"
                    height="28" color='white'
                    />
            </a>
            </div>
          <div className="navbarBasicExample navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                
              </div>
              <div className="navbar-item">
                <div className="buttons">
                  <Link id="nav-button" className="button is-rounded" to='/auth/login'>LOGIN</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
};