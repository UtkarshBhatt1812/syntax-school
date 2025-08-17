import express from "express";
import errorHandler from "./common/middlewares/error-handler.js";
const app = express();

app.use(express.urlencoded({extended : true}))
app.use(express.json());
app.use(errorHandler)

app.get("/", (req, res) => {
    
    res.send("Welcome to SYNTAX-SCHOOL");
    
});

export default app ; 