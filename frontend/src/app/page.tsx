import Link from "next/link";
import { TopBar } from "@/components/top-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { student, weeklyPlan } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="space-y-8">
      <TopBar name={student.name} goal={student.goal} />

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Treino do dia</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-2xl font-semibold">{student.todayWorkout}</p>
                <p className="text-sm text-muted">Treino focado em performance e execução limpa.</p>
              </div>
              <Button asChild>
                <Link href="/treinos">Iniciar treino</Link>
              </Button>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-muted">Consistência semanal</p>
              <Progress value={student.weeklyCompletion} />
              <p className="text-xs text-muted">Você completou {student.weeklyCompletion}% do plano.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sequência atual</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-3xl font-semibold">🔥 {student.streakDays} dias</div>
            <p className="text-sm text-muted">Continue treinando para manter o ritmo.</p>
            <Button variant="secondary" asChild>
              <Link href="/dashboard">Ver dashboard</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Plano semanal</h2>
          <Button variant="ghost" asChild>
            <Link href="/treinos">Ver todos</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {weeklyPlan.map((item) => (
            <Card key={item.label}>
              <CardContent className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold">{item.label}</p>
                  <p className="text-sm text-muted">{item.day} · {item.focus}</p>
                </div>
                <Badge>Semana 1</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Próximos treinos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted">
            <p>Quarta: Treino B1 (Pernas)</p>
            <p>Sexta: Treino A2 (Costas e ombros)</p>
            <p>Sábado: Treino B2 (Posterior)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Objetivo atual</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{student.goal}</p>
            <p className="text-sm text-muted">Planos ajustados para hipertrofia com segurança.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Acesso rápido</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Button variant="secondary" asChild>
              <Link href="/perfil">Perfil do aluno</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/progresso">Ver progresso</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
