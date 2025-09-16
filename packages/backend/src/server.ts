import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import http from "node:http";
import { appRouter } from "./trpc/app-router";

dotenv.config();
// Initialize Express app
const app = express();
const server = http.createServer(app);

// Server configuration
const PORT = process.env.PORT || 3000;

// CORS configuration
const allowedOrigins: string[] = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const corsOptions: cors.CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allowed?: boolean) => void
  ) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

// Security and body parsers
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url} from ${
      req.headers.origin
    }`
  );
  next();
});

// tRPC endpoint
app.use(
  "/api/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: () => ({}),
  })
);

// Start the server
server.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT} 🚀`);
});
