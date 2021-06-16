import Sequelize from 'sequelize';
import {sequelize} from '../database/database';//esto es par ala conexion
//como esta relacionado tengo que importar el archivo relacionado
import Task from './Tasks'

//definir el modelo de daos 

const Project = sequelize.define('projects',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    nombre:{
         type:Sequelize.TEXT
    },
    prioridad:{
        type:Sequelize.INTEGER
    },
    descripcion:{
        type:Sequelize.TEXT
    },
    fecha_entrega:{
        type:Sequelize.DATE
    }
},{
    timestamps:false
});

//un proyecto tiene muchas tareas
Project.hasMany(Task,{foreingKey:'projectid',sourceKey:'id'})
//una tarea esta en un proyecto
Task.belongsTo(Project,{foreingKey:'projectid',sourceKey:'id'})


export default Project;





