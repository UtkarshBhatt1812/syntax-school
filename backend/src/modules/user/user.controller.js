import { User } from "./user.model.js";


export const getUserDetail = (req,res)=>{
    
        const user = User.findOne({id : req.header.id});
        if(!user)
        console.log("no user found") ;
    
}


