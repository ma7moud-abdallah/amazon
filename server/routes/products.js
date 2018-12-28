const router = require('express').Router()
const Product = require('../models/product')
const check = require('../middlewares/check-token')
const faker = require('faker')


router.route('/')
.get(check, (req,res,next) => {
    console.log(req.decoded.user)
   Product.find({owner:req.decoded.user._id})
//    .populate('owner')
//    .populate('category')
   .exec((err, products) => {
      res.json({
          success:true,
          products: products
      })
   })
})
.post(check, (req,res,next) => {
    let product = new Product({
    category: req.body.categoryID,
    owner: req.decoded.user._id, 
    price: req.body.price,
    name: req.body.name,
    image: req.body.imageurl,
    description: req.body.description 
    })
    product.save()
})



//for test
router.post('/faker/test',(req,res,next) => {
  for(i=0 ; i < 20 ; i++){

            let product = new Product({
            category: '5bd30ae3f3c005364c49547d',
            owner: '5bd30b68f3c005364c49547e', 
            price: faker.commerce.price(),
            name: faker.commerce.productName(),
            image: faker.image.cats(),
            description: faker.lorem.words()
            })
            product.save()
           
        }
        res.json({
            success: true,
        })
})




module.exports = router