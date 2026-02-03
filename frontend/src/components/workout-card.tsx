"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
}

interface WorkoutCardProps {
  name: string;
  day: string;
  exercises: Exercise[];
}

export function WorkoutCard({ name, day, exercises }: WorkoutCardProps) {
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({});
  const [weights, setWeights] = useState<Record<string, string>>({});

  const toggleExercise = (exerciseId: string) => {
    setCompletedExercises((prev) => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const markWorkoutComplete = () => {
    const allCompleted = exercises.every((exercise) => completedExercises[exercise.id]);
    if (!allCompleted) {
      alert("Conclua todos os exercícios antes de finalizar o treino.");
      return;
    }
    alert("Treino registrado com sucesso!");
  };

  return (
    <Card className="space-y-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{name}</span>
          <span className="text-xs text-muted">{day}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="flex flex-col gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold">{exercise.name}</p>
                <p className="text-xs text-muted">
                  {exercise.sets} séries · {exercise.reps} reps
                </p>
              </div>
              <Checkbox
                label="Concluído"
                checked={!!completedExercises[exercise.id]}
                onChange={() => toggleExercise(exercise.id)}
              />
            </div>
            <Input
              placeholder="Carga utilizada (kg)"
              value={weights[exercise.id] ?? ""}
              onChange={(event) =>
                setWeights((prev) => ({ ...prev, [exercise.id]: event.target.value }))
              }
            />
          </div>
        ))}
        <Button onClick={markWorkoutComplete}>Finalizar treino</Button>
      </CardContent>
    </Card>
  );
}
