const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { createAdmin } = require('./controllers/admin.controller')
const { dbConnection } = require('./database/config');

const app = express();

// DB
dbConnection();

// CORS
app.use( cors() );

// Directorio publico
app.use( express.static( 'public' ) );

// Body parser
app.use( express.json() );

// Routes
app.use( '/api/auth', require('./routes/auth.routes') );
app.use( '/api/adm', require('./routes/admin.routes') );

app.listen( process.env.PORT, () => {
    console.log( `Server running at port ${ process.env.PORT }` )
} );