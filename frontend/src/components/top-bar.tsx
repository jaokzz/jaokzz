import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TopBarProps {
  name: string;
  goal: string;
}

export function TopBar({ name, goal }: TopBarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted">Bem-vinda de volta</p>
          <h1 className="text-3xl font-semibold">Olá, {name}</h1>
        </div>
        <Button variant="secondary">Acessar perfil</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Badge>Objetivo atual</Badge>
        <span className="text-sm text-muted">{goal}</span>
      </div>
    </div>
  );
}
