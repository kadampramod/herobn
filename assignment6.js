const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 1234;

app.use(cors());
app.use(express.json());

const route = require('./router/index');
app.use('/',route); 
const serverDB = 'mongodb+srv://DB_new:mV7WoB2GNhUR1BxY@cluster0.unjrd.mongodb.net/Actual_DB?retryWrites=true&w=majority';

mongoose.connect(serverDB ,  { useNewUrlParser: true })   
    .then(res =>{
        app.listen(port, { useUnifiedTopology: true } ,() => {
            console.log(`server is running on :${port}`);
        })
         
    })
    .catch(err => console.log(err));


