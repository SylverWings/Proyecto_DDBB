const express = require ('express');
const colors = require('colors');

const app = express ();
app.use(express.json());

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Server on port ${PORT}`.bgGreen.black));