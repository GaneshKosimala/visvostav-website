const express = require('express')
const router = express.Router()
const signUpTemplateCopy =require('../schema/signupmodels')


router.post('/signup',(request,response)=>{
    const signedUpUser=new signUpTemplateCopy({
        selectedevent:request.body.selectedevent,
        collegename:request.body.collegename,
        branch:request.body.branch,
        noofmembers:request.body.noofmembers,
        names:request.body.names,
        rollnos:request.body.rollnos,
        email:request.body.email,
        refno:request.body.refno
     })
     signedUpUser.save()
     .then(data => {
         response.json(data)
         console.log(signedUpUser)
     })
     .catch( error =>{
         response.json(error)
         console.log(error)
     })
     
    
 }) 

 module.exports= router