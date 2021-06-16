import Sequelize from 'sequelize';
import {sequelize} from '../database/database';//esto es par ala conexion


const Task = sequelize.define('tasks',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    nombre:{
        type:Sequelize.TEXT
    },
    estado:{
        type:Sequelize.BOOLEAN
    },
    projectid:{
        type:Sequelize.INTEGER
    }
},{
    timestamps:false
});

export default Task;