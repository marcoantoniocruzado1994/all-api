 const {Router} = require('express')
const router = Router();


// ruta inicial
router.get('/',(req,res)=>{
    res.json({
        message:"Hola Usaremos Docker"
    })
})


module.exports = router;