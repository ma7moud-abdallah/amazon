const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = (req,res,next) => {
    let token = req.headers["authorization"]
     if(!token){
         return res.status(403).json({
             success:false,
             message:"please login "
         })
     }
        jwt.verify(token,config.secret,(err,decoded)=>{
            if(err){
                res.json({
                    success:false,
                    message:"Authentication faild "
                })
            }else{
                req.decoded = decoded
                next()
            }
        })
}