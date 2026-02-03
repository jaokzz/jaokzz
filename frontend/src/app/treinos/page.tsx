import Link from "next/link";
import { WorkoutCard } from "@/components/workout-card";
import { Button } from "@/components/ui/button";
import { workouts } from "@/lib/data";

export default function WorkoutsPage() {
  return (
    <main className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Treinos da semana</h1>
          <p className="text-sm text-muted">Organizados por semana e com registro de cargas.</p>
        </div>
        <Button variant="secondary" asChild>
          <Link href="/">Voltar à home</Link>
        </Button>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} name={workout.name} day={workout.day} exercises={workout.exercises} />
        ))}
      </section>
    </main>
  );
}
