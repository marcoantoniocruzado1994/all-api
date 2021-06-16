import { Router} from 'express';
const router = Router()

//importnado los controladores
import { createTask, getTasks,deleteTask,updateTask, getOneTask, getTasksByProject } from "../controllers/task.controllers";

// api/tasks/
router.post('/',createTask)
router.get('/',getTasks)

//api/tasks/:id
router.delete('/:id',deleteTask)
router.put('/:id',updateTask)
router.get('/:id',getOneTask)
// api/task/project/projectId
router.get('/project/:projectid',getTasksByProject)

export default router;