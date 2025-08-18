
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   name : {
    type : String ,
    required : true , 
    trim : true , 
    maxLength : 100
   },
   email : {    
    type : String,
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
    type : String,
    default : null,
    select : false
},
   roles : {
    type : String,
    enum : ["learner","instructor","admin"],
    default : "learner",
    index : true
},
 status : {
    type : String, 
    enum : ["active","pending","deleted","suspended"],
    default : "pending",
    index : true
 },
 lastloginAt : {
    type : Date
},
   courses : {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Course'
   }
   
},
{
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