import { Database } from "./schema.js";

export const database: Database = {
  users: [
    {
      id: "user-1",
      email: "aluno@fit.com",
      passwordHash: "hashed-password",
      provider: "email",
      profile: {
        id: "profile-1",
        fullName: "Marina Souza",
        cpf: "123.456.789-00",
        birthDate: "1996-04-12",
        weightKg: 68,
        heightCm: 168,
        primaryGoal: "hipertrofia",
        healthAssessment: {
          medications: ["Vitamina D"],
          previousSurgeries: ["Artroscopia no joelho (2018)"],
          injuriesOrLimitations: ["Lombar sensível"],
          medicalComplications: []
        }
      }
    }
  ],
  workouts: [
    {
      id: "wk-1-a1",
      name: "Treino A1",
      weekNumber: 1,
      dayLabel: "Segunda",
      exercises: [
        { id: "ex-1", name: "Supino reto", sets: 4, reps: "10-12" },
        { id: "ex-2", name: "Remada curvada", sets: 4, reps: "10-12" },
        { id: "ex-3", name: "Desenvolvimento", sets: 3, reps: "12" }
      ]
    },
    {
      id: "wk-1-b1",
      name: "Treino B1",
      weekNumber: 1,
      dayLabel: "Quarta",
      exercises: [
        { id: "ex-4", name: "Agachamento", sets: 4, reps: "8-10" },
        { id: "ex-5", name: "Leg press", sets: 4, reps: "12" },
        { id: "ex-6", name: "Panturrilha", sets: 4, reps: "15" }
      ]
    },
    {
      id: "wk-1-a2",
      name: "Treino A2",
      weekNumber: 1,
      dayLabel: "Sexta",
      exercises: [
        { id: "ex-7", name: "Puxada alta", sets: 4, reps: "10-12" },
        { id: "ex-8", name: "Crucifixo", sets: 3, reps: "12" },
        { id: "ex-9", name: "Tríceps corda", sets: 3, reps: "12-15" }
      ]
    },
    {
      id: "wk-1-b2",
      name: "Treino B2",
      weekNumber: 1,
      dayLabel: "Sábado",
      exercises: [
        { id: "ex-10", name: "Levantamento terra", sets: 4, reps: "6-8" },
        { id: "ex-11", name: "Mesa flexora", sets: 4, reps: "10-12" },
        { id: "ex-12", name: "Abdômen", sets: 3, reps: "20" }
      ]
    }
  ],
  workoutLogs: [],
  progressSnapshots: [
    { period: "weekly", completedWorkouts: 3, completionRate: 75, streakDays: 5 },
    { period: "monthly", completedWorkouts: 12, completionRate: 80, streakDays: 15 },
    { period: "quarterly", completedWorkouts: 28, completionRate: 70, streakDays: 15 }
  ]
};
