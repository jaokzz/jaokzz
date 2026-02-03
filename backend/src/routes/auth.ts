import { FastifyInstance } from "fastify";
import { z } from "zod";
import { createEmailUser, findUserByEmail, signSession } from "../lib/auth.js";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export async function authRoutes(fastify: FastifyInstance) {
  fastify.post("/auth/email/login", async (request, reply) => {
    const payload = loginSchema.parse(request.body);
    const user = findUserByEmail(payload.email);

    if (!user) {
      reply.code(401);
      return { message: "Credenciais inválidas" };
    }

    const token = await signSession(fastify, user);
    reply.setCookie("session", token, { path: "/", httpOnly: true });
    return { token };
  });

  fastify.post("/auth/email/register", async (request, reply) => {
    const payload = loginSchema.parse(request.body);
    const existingUser = findUserByEmail(payload.email);

    if (existingUser) {
      reply.code(409);
      return { message: "Usuário já existe" };
    }

    const user = createEmailUser(payload.email, "hashed-password");
    const token = await signSession(fastify, user);
    reply.setCookie("session", token, { path: "/", httpOnly: true });
    return { token };
  });

  fastify.post("/auth/oauth/google", async (_request, reply) => {
    reply.code(200);
    return { message: "Fluxo OAuth Google iniciado" };
  });

  fastify.post("/auth/oauth/apple", async (_request, reply) => {
    reply.code(200);
    return { message: "Fluxo OAuth Apple iniciado" };
  });

  fastify.post("/auth/logout", async (_request, reply) => {
    reply.clearCookie("session", { path: "/" });
    return { message: "Sessão encerrada" };
  });
}
