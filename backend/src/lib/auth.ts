import { FastifyInstance, FastifyRequest } from "fastify";
import { User } from "../db/schema.js";
import { database } from "../db/mockData.js";

export const findUserByEmail = (email: string) =>
  database.users.find((user) => user.email === email);

export const getUserById = (id: string) =>
  database.users.find((user) => user.id === id);

export const createEmailUser = (email: string, passwordHash: string): User => {
  const user: User = {
    id: `user-${database.users.length + 1}`,
    email,
    passwordHash,
    provider: "email",
    profile: {
      id: `profile-${database.users.length + 1}`,
      fullName: "Novo aluno",
      cpf: "",
      birthDate: "",
      weightKg: 0,
      heightCm: 0,
      primaryGoal: "saude",
      healthAssessment: {
        medications: [],
        previousSurgeries: [],
        injuriesOrLimitations: [],
        medicalComplications: []
      }
    }
  };

  database.users.push(user);
  return user;
};

export const signSession = async (fastify: FastifyInstance, user: User) =>
  fastify.jwt.sign({ sub: user.id, email: user.email });

export const requireAuth = async (request: FastifyRequest) => {
  await request.jwtVerify();
};
