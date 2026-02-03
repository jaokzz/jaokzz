import { FastifyInstance } from "fastify";
import { z } from "zod";
import { database } from "../db/mockData.js";
import { requireAuth } from "../lib/auth.js";

const profileSchema = z.object({
  fullName: z.string().min(3),
  cpf: z.string().min(11),
  birthDate: z.string(),
  weightKg: z.number().nonnegative(),
  heightCm: z.number().nonnegative(),
  primaryGoal: z.enum(["hipertrofia", "forca", "saude", "emagrecimento"]),
  healthAssessment: z.object({
    medications: z.array(z.string()),
    previousSurgeries: z.array(z.string()),
    injuriesOrLimitations: z.array(z.string()),
    medicalComplications: z.array(z.string())
  })
});

export async function profileRoutes(fastify: FastifyInstance) {
  fastify.get("/profile", { preHandler: requireAuth }, async (request) => {
    const userId = request.user.sub as string;
    const user = database.users.find((item) => item.id === userId);
    return { profile: user?.profile };
  });

  fastify.put("/profile", { preHandler: requireAuth }, async (request) => {
    const payload = profileSchema.parse(request.body);
    const userId = request.user.sub as string;
    const user = database.users.find((item) => item.id === userId);

    if (!user) {
      return { message: "Usuário não encontrado" };
    }

    user.profile = { ...user.profile, ...payload };
    return { profile: user.profile };
  });
}
