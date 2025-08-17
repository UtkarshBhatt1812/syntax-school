
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   name : {
    type : string ,
    required : true , 
    trim : true , 
    maxLength : 100
   },
   email : {    
    type : string,
    required  : true , 
    lowercase : true,
    trim : true , 
    index : true ,
    unique : true , 
    validate :  {
       validator : (v)=>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Invalid email format",
       
    }
},
   password  : {
    type : string,
    default : null,
    select : false
},
   roles : {
    type : string,
    enum : ["learner","instructor","admin"],
    default : "leaner",
    index : true
},
 status : {
    type : string, 
    enum : ["active","pending","deleted","suspended"],
    index : true
 },
 lastloginAt : {
    type : Date
}
 
},{
    timestamps: true, 
    versionKey: false, 
    toJSON: {
      virtuals: true,
      transform: (_doc, ret) => {
        delete ret.password; 
        return ret;
      },
    },
    toObject: { virtuals: true },
  });

  
 export const User = mongoose.model("User",userSchema);