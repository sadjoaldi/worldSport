import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Express with TypeScript you see me? !");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} 🚀`);
});
