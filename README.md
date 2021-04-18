# Zendala Customers

## About the application
This is an a test app for [Zenda.la](https://zenda.la) job application

The backend is built in NodeJS using Express as main library. The frontend is built in ReactJS using Redux for states management and localStorage for set and get token provided from the backend.

The application can register some customers in an account of **[Openpay](https://openpay.mx)** and save a register in **MongoDB Atlas** database.
Contains a landing page for admin login and after review the customers registered in the app.
The app is secured with **JsonWeb Token**, password hash provided from **Bcrypt** and validate some fields (name, email, password match) with **Express-Validator**.


## Deploy 🚀

The backend is deployed in Heroku and can visit clicked **[here](http://zendala.herokuapp.com/)**.
The frontend is deployed using Vercel and can visit clicked **[here](https://zendala.vercel.app)**
