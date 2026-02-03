import Fastify from "fastify";
import cookie from "@fastify/cookie";
import jwt from "@fastify/jwt";
import { authRoutes } from "./routes/auth.js";
import { profileRoutes } from "./routes/profile.js";
import { workoutRoutes } from "./routes/workouts.js";
import { progressRoutes } from "./routes/progress.js";

const app = Fastify({ logger: true });

await app.register(cookie);
await app.register(jwt, {
  secret: "super-secret-key",
  cookie: {
    cookieName: "session",
    signed: false
  }
});

app.get("/health", async () => ({ status: "ok" }));

await app.register(authRoutes);
await app.register(profileRoutes);
await app.register(workoutRoutes);
await app.register(progressRoutes);

const start = async () => {
  try {
    await app.listen({ port: 3333, host: "0.0.0.0" });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

await start();
