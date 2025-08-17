import express from "express";
import errorHandler from "./common/middlewares/error-handler.js";
import userRouter from "./modules/user/user.Routes.js";
const app = express();

app.use(express.urlencoded({extended : true}))
app.use(express.json());
app.use(errorHandler)
// app.use("/api/v1/auth",authRouter)
app.use("/api/v1/users",userRouter)
app.use("/api/v1/courses",(req,res)=>{
    res.send ("Courses Route")
})

app.get("/", (req, res) => {
    
    res.send("Welcome to SYNTAX-SCHOOL");
    
});

export default app ; 