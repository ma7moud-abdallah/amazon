const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const crypto = require('crypto')


const userSchema = mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    isSeller:{type:Boolean, default: false},
    image: String,
    address:{
        addr1: String,
        addr2: String,
        city: String,
        state: String,
        postalCode: String
    },
    created:{type: Date, default:Date.now()}
})

userSchema.pre('save', function(next)  {
     user = this
     if (!user.isModified('password')) return next();
     bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) throw err
        user.password = hash 
        next()
       });
   
})


userSchema.methods.comparePassword = function (password,callback) {
    bcrypt.compare(password, this.password, (err, result) => {
       if(err) throw err 
       callback(null,result)
    });
}

userSchema.methods.gravatar = function(size){
    if(!size) size = 200
    if(!this.email) return 'https://www.gravatar.com/avatar/?s'+size+'&d=retro'
    let md5 = crypto.createHash('md5').update(this.email).digest('hex')              
    return 'https://www.gravatar.com/avatar/' +md5+ '?s' +size+ '&d=retro'
}

module.exports = mongoose.model('User',userSchema)