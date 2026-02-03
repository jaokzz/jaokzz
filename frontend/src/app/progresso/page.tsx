import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { progressSnapshots } from "@/lib/data";

export default function ProgressPage() {
  return (
    <main className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Progresso do aluno</h1>
          <p className="text-sm text-muted">Visão semanal, mensal e trimestral.</p>
        </div>
        <Button variant="secondary" asChild>
          <Link href="/dashboard">Voltar ao dashboard</Link>
        </Button>
      </div>

      <section className="grid gap-4 md:grid-cols-3">
        {progressSnapshots.map((snapshot) => (
          <Card key={snapshot.label}>
            <CardHeader>
              <CardTitle>{snapshot.label}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-2xl font-semibold">{snapshot.value}%</div>
              <Progress value={snapshot.value} />
              <p className="text-sm text-muted">Consistência de treinos</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Evolução detalhada</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted">
          <p>Semana 1: 3/4 treinos concluídos</p>
          <p>Semana 2: 4/4 treinos concluídos</p>
          <p>Semana 3: 2/4 treinos concluídos</p>
        </CardContent>
      </Card>
    </main>
  );
}
