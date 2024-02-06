const {Router}=require('express')
const User=require('../models/user')
const router=Router();

router.get("/signin",(req,res)=>{
    return res.render("signin");
})

router.get("/signup",(req,res)=>{
    return res.render("signup");
})
router.post('/signin', async (req, res) => {
 
    try {
        const {email, password } = req.body;
        const token=await User.matchPasswordAndgeneratetoken(email,password);
        console.log("token",token)
        return res.cookie('token',token).redirect('/');
    } catch (error) {
        return res.render('signin',{
            error: 'YOur password is incorrect'
        })
    }
       
   
});


router.post('/signup', async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const newUser = await User.create({
            fullname,
            email,
            password

        });

        return res.redirect('/');
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).send('Internal Server Error');
    }
});
router.get("/logout",(req,res)=>{
    return res.clearCookie("token").redirect('/');
})
module.exports=router;
