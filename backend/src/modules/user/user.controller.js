
import { User } from "./user.model.js";
import { password as bunPassword } from "bun";

export const getUserDetail = (req,res)=>{
    
        const user =  User.findOne({id : req.header.id});
        if(!user)
        console.log("No user found") ;
        else 
        {
            res.status(201).send(user);
        }
}
export const updateUserDetail = async (req, res) => {
  try {
    const { name, email, password } = req.body;


    let updateData = {};
    if (name) updateData.name = name;
    if (email) updateData.email = email;


    if (password) {
      const hash = await bunPassword.hash(password,{algorithm : "bcrypt", cost : 10});
      updateData.password = hash;
    }

    const user = await User.findOneAndUpdate(
      { email: req.user.email },   
      { $set: updateData },        
      { new: true, runValidators: true }
    ).select("-password");          

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User details updated successfully",
      user,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const getSessions = ()=>{
    
}