const express = require('express');
const morgan = require('morgan');
const app  = express()


// middelweares
app.use(morgan('dev'))


// rutas
app.use(require('./routes/index'));




module.exports =app;