
import { User } from "../user/user.model.js";
import { password as bunPassword} from "bun";
import { getToken } from "../../common/utils/jwt.js";

export const registerUser = async (req,res)=>{
    const {name,email,password} = req.body; 
    const hash = await bunPassword.hash(password);
    const newUser =  await User.create({
        name : name ,
        email : email ,
        password : hash
    })
    res.status(201).json({
        message : "User Created Successfully",
        user : newUser
    })
}
export const loginUser = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("email id password");
    if (!user) {
      return res.status(404).json({ message: "No user found!" });
    }
    const isValid = await bunPassword.verify(password,user.password) ;
    if (!isValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = getToken({ id: user._id, email: user.email });
    res.cookie("token", token, {
  httpOnly: true,     
  secure: true,      
  sameSite: "strict", 
  maxAge:  60 * 60 * 1000
});

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
    
};
export const logoutUser = (req,res)=>{
    res.clearCookie("token", {
  httpOnly: true,
  secure: true,
  sameSite: "strict"
});
res.status(200).json({ message: "Logged out successfully" });

}