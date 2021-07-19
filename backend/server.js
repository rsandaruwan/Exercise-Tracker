const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const http = require('http');

require('dotenv').config();
// const hostname =  '0.0.0.0';

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const uri = process.env.ATLES_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });


const connection = mongoose.connection;
connection.once('open',() =>{
    console.log("MongoDB connections successfully");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});