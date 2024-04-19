const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config()

app.use(express.json());

const PORT = process.env.APP_PORT || 3001;


// Load Database
require('./src/db/mongoose-db')

const route = require('./src/routes')
app.use('/tiny/', route)


// Frontend
// Middleware to serve static files
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
