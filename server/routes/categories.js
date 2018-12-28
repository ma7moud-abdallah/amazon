const router = require('express').Router()
const Category = require('../models/categories')


router.route('/')
.get((req,res,next) => {
    Category.find({})
    .then(cats => {
        res.status(200).json({
            categories: cats || []
        })
    })
    .catch(err => {
        res.status(400).json({
            Error: err
        })
    })
})

.post((req,res,next) => {
    const category = new Category({
        name: req.body.name
    })
    category.save()
    res.json({
        success: true,
        category: category,
        message: 'category added successfuly'
    })
})

router.get('/:id', (req, res, next) => {
    Category.find({ _id: id })
        .then(result => {
            res.json({
                success: true,
                cat: result
            })
        })
        .catch(err => {

            res.json({
                success: false,
                err: err
            })

        })
})

module.exports = router

