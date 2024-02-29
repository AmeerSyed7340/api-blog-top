const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config(); //must be imported 

//initiate connection to server
connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('Express server running...')
})

//set up port for app to listen on
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});