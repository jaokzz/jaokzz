import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FitSaaS - Gestão de Treinos",
  description: "SaaS de gerenciamento de treinos com foco em performance e evolução."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background text-white">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
