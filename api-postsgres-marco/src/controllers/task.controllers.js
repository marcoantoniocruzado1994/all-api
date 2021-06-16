import Task from "../models/Tasks";


//rutas generales
export async function createTask(req,res) {

    const {nombre,estado,projectid} = req.body;

   
         const newTask = await Task.create({
            nombre,
            estado,
            projectid
        },{
            fields:['nombre','estado','projectid']
        })

        if (newTask) {
            return res.json({
                message:"tarea creada",
                newTask
            })
        }

  
    
}


export async function getTasks(req,res) {
    const tasks = await Task.findAll({
        attributes:['id','projectid','nombre','estado'],
        order:[
            ['id','DESC']
        ]
    });

    res.json({
        message:"estos son las tareas",
        tasks
    })

}


//ruttas con la nesecidas de un id
export async function getOneTask (req,res) {
    const {id} = req.params
    const task = await Task.findOne({attributes:['id','nombre','estado','projectid'],where:{id}})
    res.json({
        message:"tarea encontrada",
        task
    })
}
export async function deleteTask(req,res) {
    const {id} = req.params
    const deleteTask = await Task.destroy({where:{id:id}})
    
    res.json({
        message:"tarea eliminada",
        deleteTask
    })
}
export async function updateTask(req,res) {
    const{id} = req.params;
    const{nombre,estado,projectid} = req.body;

    try {
        const task = await Task.findOne({attributes:['nombre','estado','projectid','id'],where:{id:id}})
         const updateTask = await Task.update({
            nombre,
            estado,
            projectid
        },{
            where:{
                id
            }
        })

    return res.json({
        message:"tarea actualizada",
        updateTask
    })
    } catch (error) {
        console.log(error);
    }
}

//ruta para obtener todas las rutas
export async function getTasksByProject(req,res) {

    const {projectid} = req.params

     const tasks = await Task.findAll({
        attributes:['id','projectid','estado','nombre'],
        where:{projectid}
    });

    res.json({tasks})
}


