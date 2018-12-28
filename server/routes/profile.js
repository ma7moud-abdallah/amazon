const router = require('express').Router()
const User = require('../models/user')
const check = require('../middlewares/check-token')


router.get('/',check,(req,res,next) => {
    User.findOne({_id:req.decoded.user._id},(err,user) =>{
        if(err) throw err
        res.json({
            success:true,
            user:user
        })
    })
   
})



router.put('/',check,(req,res,next) => {
    User.findOne({_id:req.decoded.user._id},(err,user) =>{
        if(err) return res.json({error:err})

        if(req.body.email) user.email = req.body.email
        if(req.body.name) user.name = req.body.name
        if(req.body.password) user.password = req.body.password
         user.isSeller = req.body.isSeller
         
        user.save()
        res.json({
            message:"profile modified",
            user:user
        })
  })

})

router.route('/address')
  .get(check,(req,res,next) => {
    User.findOne({_id:req.decoded.user._id},(err,user) =>{
        if(err) throw err
        res.json({
            success:true,
            address:user.address
        })
    })
   
})
.post(check,(req,res,next) => {
    User.findOne({_id:req.decoded.user._id},(err,user) =>{
        if(err) throw err
        
        if(req.body.addr1) user.address.addr1 = req.body.addr1
        if(req.body.addr2) user.address.addr2 = req.body.addr2
        if(req.body.city) user.address.city = req.body.city
        if(req.body.state) user.address.state = req.body.state
        if(req.body.postalCode) user.address.postalCode = req.body.postalCode
        

        user.save()
        res.json({
            message:"addess modified"
        })
  })
})

module.exports = router
