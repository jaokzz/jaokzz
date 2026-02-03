import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface StatCardProps {
  title: string;
  value: string;
  progress?: number;
  helper?: string;
}

export function StatCard({ title, value, progress, helper }: StatCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className="text-sm text-muted">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <span className="text-2xl font-semibold">{value}</span>
        {progress !== undefined ? (
          <div className="space-y-2">
            <Progress value={progress} />
            {helper ? <span className="text-xs text-muted">{helper}</span> : null}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
