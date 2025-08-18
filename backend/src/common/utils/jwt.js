import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/env.js";

if (!JWT_SECRET) {
  throw new Error("❌ JWT_SECRET is not defined in env.js");
}

export const getToken = ({ id, email }) => {
  try {
    return jwt.sign(
      { id, email },       
      JWT_SECRET,          
      { expiresIn: "1h" }   )
  } catch (err) {
    console.error("JWT Sign Error:", err);
    return null;
  }
};
export const verifyToken = (token) => {
  try {
    return jwt.verify(token,JWT_SECRET);
  } catch (err) {
    console.error("User not verified ! ");
    return null;
  }
};

