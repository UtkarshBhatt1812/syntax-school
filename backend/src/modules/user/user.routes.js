import {Router} from "express"
import { getUserDetail, updateUserDetail } from "./user.controller";

const userRouter = Router();
userRouter.get('/me',getUserDetail)
userRouter.patch('/me',updateUserDetail)
userRouter.patch('/me/passwords',(req,res)=>{
    res.send("hello")
})
userRouter.get('/me/sessions',(req,res)=>{
    res.send("hello")
})
userRouter.delete('/me/sessions/:sessionid',()=>{
    
})
export default userRouter ;