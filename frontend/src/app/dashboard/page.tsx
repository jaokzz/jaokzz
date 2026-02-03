import Link from "next/link";
import { StatCard } from "@/components/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { student, progressSnapshots } from "@/lib/data";

export default function DashboardPage() {
  return (
    <main className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Dashboard do aluno</h1>
          <p className="text-sm text-muted">Acompanhe consistência e evolução.</p>
        </div>
        <Button variant="secondary" asChild>
          <Link href="/treinos">Treinos</Link>
        </Button>
      </div>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Treinos na semana" value="3 concluídos" progress={student.weeklyCompletion} helper="Meta: 4" />
        <StatCard title="Treinos no mês" value="12 concluídos" progress={student.monthlyCompletion} helper="Meta: 15" />
        <StatCard title="Treinos no trimestre" value="28 concluídos" progress={student.quarterlyCompletion} helper="Meta: 40" />
        <StatCard title="Taxa de conclusão" value={`${student.weeklyCompletion}%`} progress={student.weeklyCompletion} helper="Últimos 7 dias" />
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Monitor de consistência</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted">Sua sequência atual é de</p>
            <p className="text-3xl font-semibold">🔥 {student.streakDays} dias seguidos</p>
            <div className="space-y-3">
              {progressSnapshots.map((snapshot) => (
                <div key={snapshot.label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-muted">
                    <span>{snapshot.label}</span>
                    <span>{snapshot.value}%</span>
                  </div>
                  <Progress value={snapshot.value} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resumo rápido</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted">
            <p>Frequência média: 4x/semana</p>
            <p>Treinos concluídos sem atraso: 82%</p>
            <p>Semana atual: 1</p>
            <Button asChild>
              <Link href="/progresso">Ver detalhes</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
