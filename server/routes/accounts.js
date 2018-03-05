const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/user')
const config = require('../config')

router.post('/signup', (req,res,next) => {
    let user = new User()
        user.name= req.body.name,
        user.email= req.body.email,
        user.password= req.body.password,
        user.isSeller= req.body.isSeller,
        user.image= user.gravatar() 

    User.findOne({email:req.body.email},(err,result) => {
        if(result){
            res.json({
                success:false,
                message:'this user is already existed'
            })
        }else{
            user.save()
            const token = jwt.sign({user:user},config.secret,{expiresIn:'7d'})
            res.json({
                success:true,
                message:'you are successfully registered',
                token:token
            })
        }
    })

    user.save()
    .then(result =>{
        console.log(user)
    })
     
})


router.post('/login', (req,res,next) => {
    User.findOne({email:req.body.email},(err,user) =>{
        if(err) return err
        if(!user){
           return res.json({
                success:false,
                message:'user not found'
            }) 
        }else if(user)
           user.comparePassword(req.body.password , (err, isMatch) => {
                if(err) throw err
                if(isMatch){
                    const token = jwt.sign({user:user},config.secret,{expiresIn:'7d'})
                     res.json({
                        success:true,
                        message:'you are successfully loggedIn ',
                        token:token
                    })
                }else{
    
                   res.json({
                        
                        success:false,
                        message:'wrong password '
                    })

                }
             })
        })
     })


     




     module.exports = router