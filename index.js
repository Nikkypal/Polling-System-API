// r = require the express module to create a new express app
const express = require('express');

// create a new instance of the express app
const app = express();
const PORT = 9000;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));

// routes from the routes models

app.use('/',require('./routes'))

app.listen(PORT, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("server running at: ", PORT);
})