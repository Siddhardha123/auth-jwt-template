import {Router} from 'express';
import userController from './controllers/User.controller.js'
import authController from './controllers/Auth.controller.js'
const router = Router()

router.post('/user/register',userController)
router.post('/user/login',authController)

export default router;