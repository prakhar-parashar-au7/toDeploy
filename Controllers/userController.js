import User from '../Models/User.js'

import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'

const controllers = {
    
    signUpPost : (req, res) => {
        const saltRounds = 10
        bcrypt.hash(req.body.password, saltRounds, function(err, hashedPassword){
        req.body.password = hashedPassword
        User.create(req.body)
            .then((user, err) => {
                if (err) {
                    res.json({
                        status : 400,
                        message : "Mongodb Cannot create new user",
                        error : err
                    })
                }
                res.json({
                    status : 200,
                    message : "Registration Successful",
                    user : user
                })
            }
            )
   
        })
        
    
    },

    
    logInPost : (req, res, next) => {
        
        User.findOne({userName : req.body.userName}, (err, user) => {
            if(err) {
                res.send("User not found")
            }
            console.log(user)
            
           bcrypt.compare (req.body.password, user.password, (err, result) => {
               if(err) {
                   console.log("heyyy")
                   res.send("password don't match")
               }
               else if (result == true){
                
                  var token = jwt.sign({userName :  req.body.userName}, 'secret', (err, token) => {
                      req.body.token = token
                      next()
  
                  })

               }
               else {
                   res.send("password don't match")
               }

           }) 

            

         
       })
      }
}


    export default controllers

