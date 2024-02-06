const { validateToken } = require("../services/authentication");

function checkAuthentication(cookiename){
return (req,res,next)=>{
    const tokenCookievalue=req.cookies[cookiename];
    if(!tokenCookievalue){
        return next();
    }

   try {
    const userpayLoad=validateToken(tokenCookievalue);
    req.user=userpayLoad
    
   } catch (error) {}
   return next();
};
   
}

module.exports={checkAuthentication};