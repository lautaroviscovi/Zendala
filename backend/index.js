const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();

// CORS
app.use( cors() );

// Directorio publico
app.use( express.static( 'public' ) );

// Body parser
app.use( express.json() );

// Routes

app.listen( process.env.PORT, () => {
    console.log( `Server running at port ${ process.env.PORT }` )
} );