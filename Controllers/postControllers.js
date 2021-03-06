import Posts from '../Models/Posts.js'
import jwt from 'jsonwebtoken'
import Users from '../Models/User.js'




const controllers = {

    addPosts : (req, res) => {
          
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

            console.log(req.body.User)

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


    

    viewPosts : (req, res) => {
         
        Posts.find((err, Posts) => {
            if(err) {
                res.send(err)

            }
            res.send(Posts)
        })


    },

    likePost : (req, res) => {
        const id = req.params.id
        Posts.update({_id : id}, {$inc:{Likes :1}}, (err, post) => {
           if(err){res.send(err)}
            res.send("Liked Successfully")
        })
        
},
    
    commentOnPost : (req, res) => {
        const id = req.params.id

        Posts.update({_id : id}, {
            $push : {
                Comments : req.body.comment
            }
        
        }).then(() => {
            res.send("Commented")
        })
    },

    createPost : (req, res) => {
        
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

    }

}


export default controllers