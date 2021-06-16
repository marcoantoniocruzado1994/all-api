import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    'postgres',//como se llama la base de datos a conectarme 
    'postgres',//el usuario con el cual te conectas
    'root',//la contraseña de ese usuario
    {
        host: 'localhost',//el host
        dialect: 'postgres',//a que base de datos nos estamos conectando 
        pool:{
            max:5,
            min:0,
            require : 30000,
            idle:10000
        },
        logging:false
    }
)