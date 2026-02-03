export type GoalType = "hipertrofia" | "forca" | "saude" | "emagrecimento";

export interface HealthAssessment {
  medications: string[];
  previousSurgeries: string[];
  injuriesOrLimitations: string[];
  medicalComplications: string[];
}

export interface StudentProfile {
  id: string;
  fullName: string;
  cpf: string;
  birthDate: string;
  weightKg: number;
  heightCm: number;
  primaryGoal: GoalType;
  healthAssessment: HealthAssessment;
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
}

export interface Workout {
  id: string;
  name: string;
  weekNumber: number;
  dayLabel: string;
  exercises: Exercise[];
}

export interface WorkoutLogEntry {
  workoutId: string;
  exerciseId: string;
  weightKg: number;
  completedAt: string;
}

export interface ProgressSnapshot {
  period: "weekly" | "monthly" | "quarterly";
  completedWorkouts: number;
  completionRate: number;
  streakDays: number;
}

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  provider: "email" | "google" | "apple";
  profile: StudentProfile;
}

export interface Database {
  users: User[];
  workouts: Workout[];
  workoutLogs: WorkoutLogEntry[];
  progressSnapshots: ProgressSnapshot[];
}
