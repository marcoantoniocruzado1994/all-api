import Project from "../models/Project";


//Obtener todos los Proyectos
export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll()
        res.json({
            data: projects
        });
    } catch (error) {
        console.log(error);
    }
}

//obtener un projecto por id
export async function getOneProject(req, res) {
    try {
        const { id } = req.params
        const project = await Project.findOne({ where: { id: id } });

        res.status(200).json({
            message: "proyecto encontrado",
            project
        })

    } catch (error) {
        console.log(error);
    }
}
//Crear un proyecto
export async function createProject(req, res) {
    const { nombre, prioridad, descripcion, fecha_entrega } = req.body;

    try {
        let newProject = await Project.create({
            nombre, prioridad, descripcion, fecha_entrega
        }, {
            fields: ['nombre', 'prioridad', 'descripcion', 'fecha_entrega']
        })

        if (newProject) {
            return res.json({
                message: 'proyecto creado satisfatoriaente',
                newProject
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "algo internamente fallo",
            data: {}
        })
    }


}


//eliminar un proyecto
export async function deleteProject(req, res) {

    try {
        const { id } = req.params
        const deleteRowCount = await Project.destroy({ where: { id: id } });

        res.status(200).json({
            message: `Se elimino el proyecto con el id:${id}`,
            deleteRowCount
        })

    } catch (error) {
        console.log(error);
    }

}
//editar el proyecto 
export async function updateProject(req,res) {
    const {id} = req.params;
    const { nombre, prioridad, descripcion, fecha_entrega } = req.body;

   try {
    const projects = await Project.findAll({attributes:['id','nombre', 'prioridad', 'descripcion', 'fecha_entrega'],where:{id}});
    //con esto sabemos que almenos ay una fila 
    if (projects.length > 0) {
        projects.forEach(async project => {
            await project.update({
                 nombre,
                 prioridad,
                 descripcion,
                 fecha_entrega
             });
        });
    }
    return res.json({
        message:"proyecto actualizado satisfactoriamente",
        projects
    })
   } catch (error) {
       console.log(error);
   }
}