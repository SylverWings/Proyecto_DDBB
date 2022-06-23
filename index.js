const express = require ('express');
const colors = require('colors');
const morgan =require('morgan');
const logger = require('./config/winston');
const db = require('./db.js');
const router = require('./router.js')
const app = express ();
app.use(express.json());



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Server on port ${PORT}`.bgGreen.black));