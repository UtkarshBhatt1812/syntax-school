
import { verifyToken } from "../utils/jwt.js";

 const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization header missing or malformed" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token not provided" });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.user = decoded; 
    next();

  } catch (err) {
    console.error("Auth Middleware Error:", err.message);
    return res.status(403).json({ message: "Authentication failed" });
  }
};
export default authMiddleware