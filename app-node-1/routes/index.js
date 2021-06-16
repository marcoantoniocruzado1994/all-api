const Router = require('express');
const router = Router();

// @desc Login/Landing page
// @route GET/
router.get('/',(req,res)=>{
    res.render("Login",{
        layout:'login',
    })
})


// @desc Dashboard
// @route GET/dashboard
router.get('/dashboard',(req,res)=>{
    res.render("Dashboard")
})






module.exports = router