export const student = {
  name: "Marina Souza",
  goal: "Hipertrofia e força",
  todayWorkout: "Superiores",
  streakDays: 15,
  weeklyCompletion: 75,
  monthlyCompletion: 80,
  quarterlyCompletion: 70
};

export const weeklyPlan = [
  { label: "Treino A1", day: "Segunda", focus: "Peito e costas" },
  { label: "Treino B1", day: "Quarta", focus: "Pernas" },
  { label: "Treino A2", day: "Sexta", focus: "Costas e ombros" },
  { label: "Treino B2", day: "Sábado", focus: "Posterior" }
];

export const workouts = [
  {
    id: "wk-1-a1",
    name: "Treino A1",
    day: "Segunda",
    exercises: [
      { id: "ex-1", name: "Supino reto", sets: 4, reps: "10-12" },
      { id: "ex-2", name: "Remada curvada", sets: 4, reps: "10-12" },
      { id: "ex-3", name: "Desenvolvimento", sets: 3, reps: "12" }
    ]
  },
  {
    id: "wk-1-b1",
    name: "Treino B1",
    day: "Quarta",
    exercises: [
      { id: "ex-4", name: "Agachamento", sets: 4, reps: "8-10" },
      { id: "ex-5", name: "Leg press", sets: 4, reps: "12" },
      { id: "ex-6", name: "Panturrilha", sets: 4, reps: "15" }
    ]
  }
];

export const progressSnapshots = [
  { label: "Semana", value: 75 },
  { label: "Mês", value: 80 },
  { label: "Trimestre", value: 70 }
];
