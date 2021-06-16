const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');


// carga inicial
dotenv.config({ path: './config/config.env' })
// passport-con google configuracion
require('./config/passport')(passport)

//  inicializacion de mi servidor
const app = express();

//base de datos 
const connectDB = require('./config/db');
connectDB();

//configuraciones
app.set('port', process.env.PORT || 3000);
app.engine('.hbs', exphbs({extname:'.hbs'}));
app.set('view engine', '.hbs');

// session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }))

app.use(passport.initialize())
app.use(passport.session())



// middleawares
if (process.env.NODE_ENV ==='development') {
    app.use(morgan('dev'));
}
app.use(express.urlencoded({ defaultLayout: 'main',extended: false }))
app.use(express.json())

// rutas
app.use(require('./routes/index'))
app.use('/auth',require('./routes/auth'))

// archivos estaticos
app.use(express.static(path.join(__dirname,'public')))
// inicializacion del servidor
app.listen(app.get('port'), console.log(`server in  ${process.env.NODE_ENV} mode on ${app.get('port')}`))
