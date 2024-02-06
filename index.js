const express=require('express');
const path=require('path')
const app=express();
const PORT=8001;
const User=require('./models/user')
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')
const userRoute=require('./routes/user');


const { checkAuthentication } = require('./middlewares/authentication');
mongoose
.connect('mongodb://127.0.0.1:27017/blogify')
.then((e)=>console.log('mongodb connected'))
.catch((error) => console.error('Error connecting to MongoDB:', error));
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))
app.use(cookieParser());
app.use(checkAuthentication('token'));
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.render('home',{
        user: req.user,
    })
})

app.use('/user',userRoute);
app.listen(PORT,()=>console.log('Heyy your server is working'))