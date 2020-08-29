import express from 'express'
import userControllers from '../Controllers/userController.js'
import postControllers from '../Controllers/postControllers.js'
import cookieParser from 'cookie-parser'
import cookieHandler from './cookies.js'


const Router = express()

Router.use(cookieParser())

Router.post('/userSignUpPost', userControllers.signUpPost)

Router.post('/userLoginPost', userControllers.logInPost, cookieHandler.sendCookie)

Router.post('/addPost', cookieHandler.cookieRecieved, postControllers.addPosts)


export default Router