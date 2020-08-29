import Posts from '../Models/Posts.js'
import jwt from 'jsonwebtoken'
import Users from '../Models/User.js'
import Posts from '../Models/Posts.js'



const controllers = {

    addPosts : (req, res) => {
        console.log("heyy")
        const token = req.body.token
        jwt.verify(token, 'secret', (err, user) => {
            if(err) res.json({
                status : 404,
                message : "Session Expired",
                error : err
            })
           
        Users.find({userName :  user.userName}, (err, user) => {
            if(err){
                res.send(err)
            }
            req.body.User = user._id

            const date = new Date()
            req.body.DateTime = date
            Posts.create(req.body).then((post, err) => {
                if (err) {
                    res.json({
                        status : 400,
                        message : "Mongodb Cannot create new post",
                        error : err
                    })
            }
            res.json({
                status : 200,
                message : "Post created Successfully",
                post : post
            })
        })
        })
            
        })

      
},

   viewPost : (req, res) => {
             
   }
}



export default controllers