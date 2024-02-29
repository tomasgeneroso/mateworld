import express from 'express';
import { Router } from 'express';
let usersRouter=express.Router()
import usersController from './usersController.js'


usersRouter.get('/', usersController.getUser);

usersRouter.post('/login',usersController.login)
usersRouter.post('/register', usersController.register);

//usersRouter.get('/showUser',usersController.deleteUser)
usersRouter.post('/moduser',usersController.modifyUser)

export default usersRouter
 