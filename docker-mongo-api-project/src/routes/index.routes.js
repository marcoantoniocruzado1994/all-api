const {Router}=require('express')

 const router=Router();


//  primera ruta
router.get('/',(req,res)=>{
    res.json({
        message:"holas Docker Denuevo"
    })
})


 module.exports=router;

