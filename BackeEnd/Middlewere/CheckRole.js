
 
let jwt = require("jsonwebtoken")

function checkRole(role){

    return(req,res,next)=>{
        let token = req.headers.authorization;
        if(!token){
            return res.send("unauthorization user");
        }
        else{
           let decodeToken = jwt.verify(token,"abcxyz");
           console.log(decodeToken,'kkkkkkkkkkkkkkkkk');
           
       
           
           if(decodeToken.role!=role){
            return res.send("acesss denideeeee")
           }
           else{
            next();
           }
        }
    }
}
module.exports=checkRole

 