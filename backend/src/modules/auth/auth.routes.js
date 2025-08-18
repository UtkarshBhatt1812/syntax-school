import { Router } from "express";
import  {registerUser,loginUser, logoutUser} from "./auth.controller"
const authRouter = Router();


authRouter.post('/register',registerUser)
authRouter.post('/login',loginUser)
authRouter.post('/logout',logoutUser)



export  default authRouter ;