import { FastifyInstance } from "fastify";
import { z } from "zod";
import { database } from "../db/mockData.js";
import { requireAuth } from "../lib/auth.js";

const logSchema = z.object({
  workoutId: z.string(),
  exerciseId: z.string(),
  weightKg: z.number().nonnegative()
});

export async function workoutRoutes(fastify: FastifyInstance) {
  fastify.get("/workouts", { preHandler: requireAuth }, async () => {
    return { workouts: database.workouts };
  });

  fastify.get("/workouts/week/:week", { preHandler: requireAuth }, async (request) => {
    const weekNumber = Number((request.params as { week: string }).week);
    const workouts = database.workouts.filter((workout) => workout.weekNumber === weekNumber);
    return { workouts };
  });

  fastify.post("/workouts/logs", { preHandler: requireAuth }, async (request) => {
    const payload = logSchema.parse(request.body);
    const entry = {
      ...payload,
      completedAt: new Date().toISOString()
    };
    database.workoutLogs.push(entry);
    return { log: entry };
  });
}
