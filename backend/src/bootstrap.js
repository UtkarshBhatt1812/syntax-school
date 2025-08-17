
import app from "./app.js";
import { connectDB } from "./config/db.js";
import { PORT } from "./config/env.js";

export async function bootstrap() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(` Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(" Failed to start server:", error);
    process.exit(1);
  }
}
