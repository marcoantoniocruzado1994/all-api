const mongoose = require('mongoose')
// como voyt a utilizar una imagen de docker como mongo para la coneccion entonces en ves de poner localhost ponemos el nombre del servicio al cual me voy a conectar qur es mongo

const uri ="mongodb://mongo/mongodockerapp"


mongoose.connect(uri)
    .then(db=>console.log("base de datos conectada",db.connection.host))
    .catch(err=>console.error(err))