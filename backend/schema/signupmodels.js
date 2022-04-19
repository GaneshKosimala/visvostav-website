const mongoose = require('mongoose')
const signUpTemplate=new mongoose.Schema({
    selectedevent:{
        type:String,
        required:true
    },
    collegename:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    noofmembers:{
        type:String,
        required:true
    },
    
    names:{
        type:String,
        required:true
    },
    rollnos:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    refno:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports= mongoose.model('registerdetails',signUpTemplate)