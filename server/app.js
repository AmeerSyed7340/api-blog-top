const express = require('express');
const connectDB = require('./config/db');
const postRoutes = require('./routes/postsRoutes');
const userRoutes = require('./routes/usersRoutes');
require('dotenv').config(); //must be imported 

const app = express();

//Middleware to parse JSON bdoies
app.use(express.json());

//initiate connection to server
connectDB();

//Middleware to handle routes
app.use('/posts', postRoutes);
app.use('/users', userRoutes);

//set up port for app to listen on
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});