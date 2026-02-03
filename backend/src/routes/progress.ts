import { FastifyInstance } from "fastify";
import { database } from "../db/mockData.js";
import { requireAuth } from "../lib/auth.js";

export async function progressRoutes(fastify: FastifyInstance) {
  fastify.get("/progress", { preHandler: requireAuth }, async () => {
    return { snapshots: database.progressSnapshots };
  });
}
