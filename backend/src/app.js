import express from "express";
import errorHandler from "./common/middlewares/error-handler.js";
import userRouter from "./modules/user/user.routes.js";
import authRouter from "./modules/auth/auth.routes.js";
import authMiddleware  from "./common/middlewares/auth.js";
import courseRouter from "./modules/course/course.routes.js";
const app = express();

app.use(express.urlencoded({extended : true}))
app.use(express.json());
app.use(errorHandler)

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/users",authMiddleware,userRouter)
app.use("/api/v1/courses",authMiddleware,courseRouter)

app.get("/", (req, res) => {
    
    res.send("Welcome to SYNTAX-SCHOOL");
    
});

export default app ; 