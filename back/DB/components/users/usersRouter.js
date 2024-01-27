import { Express } from 'express';
import { Router } from 'express';
let usersRouter=express.Router()
import usersController from './usersController.js'


usersRouter.get('/', usersController.getUser);

usersRouter.post('/', usersController.addUser);

//usersRouter.get('/showUser',usersController.deleteUser)
usersRouter.post('/moduser',usersController.modifyUser)

export default usersRouter
 