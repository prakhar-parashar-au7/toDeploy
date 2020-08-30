import express from 'express'
import userControllers from '../Controllers/userController.js'
import postControllers from '../Controllers/postControllers.js'
import cookieParser from 'cookie-parser'
import cookieHandler from './cookies.js'
import cors from 'cors'


const Router = express()

Router.use(cookieParser())

Router.use(cors())

//to check  if deployed on heroku 

Router.get('/', (req, res) => {
    res.send("done")
})
 
//User SignUp
Router.post('/userSignUpPost', userControllers.signUpPost)




//User Login
Router.post('/userLoginPost', userControllers.logInPost, cookieHandler.sendCookie)

//To add a post
Router.post('/addPost', cookieHandler.cookieRecieved, postControllers.addPosts)

//For FrontEnd

Router.post('/createPost',  postControllers.createPost)

// To view all posts
Router.get('/viewPosts', postControllers.viewPosts)

//To like a post 
Router.post('/likePost/:id', postControllers.likePost)

//To comment on a post 
Router.post('/commentOnPost/:id', postControllers.commentOnPost)

export default Router