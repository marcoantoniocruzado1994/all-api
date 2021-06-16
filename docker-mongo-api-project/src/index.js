const express = require('express');
const morgan = require('morgan');
const app = express();
// llamara a la base de datos
require('./database')

// middelweares
app.use(morgan('dev'))

// rutas
app.use(require('./routes/index.routes'))

app.listen(3000);
console.log("servidor en el puerto ",3000);