import {Router} from "express"

const userRouter = Router();
userRouter.get('/me',(req,res)=>{
    res.send("hello")
})
userRouter.patch('/me',(req,res)=>{
    res.send("hello")
})
userRouter.patch('/me/passwords',(req,res)=>{
    res.send("hello")
})
userRouter.get('/me/sessions',()=>{
    
})
userRouter.delete('/me/sessions/:sessionid',()=>{
    
})
export default userRouter ;