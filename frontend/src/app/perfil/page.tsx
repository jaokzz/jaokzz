"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Perfil salvo com sucesso!");
  };

  return (
    <main className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold">Perfil do aluno</h1>
          <p className="text-sm text-muted">Dados pessoais e informações de saúde.</p>
        </div>
        <Button variant="secondary" asChild>
          <Link href="/">Voltar à home</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Informações pessoais</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <Input placeholder="Nome completo" name="fullName" required />
            <Input placeholder="CPF" name="cpf" required />
            <Input placeholder="Data de nascimento" name="birthDate" type="date" required />
            <Input placeholder="Peso atual (kg)" name="weight" type="number" required />
            <Input placeholder="Altura (cm)" name="height" type="number" required />
            <Input placeholder="Objetivo principal" name="goal" required />
            <div className="md:col-span-2">
              <Input placeholder="Medicamentos em uso" name="medications" />
            </div>
            <div className="md:col-span-2">
              <Input placeholder="Cirurgias anteriores" name="surgeries" />
            </div>
            <div className="md:col-span-2">
              <Input placeholder="Lesões ou limitações" name="injuries" />
            </div>
            <div className="md:col-span-2">
              <Input placeholder="Complicações médicas" name="complications" />
            </div>
            <div className="md:col-span-2 flex items-center gap-4">
              <Button type="submit">Salvar perfil</Button>
              {status ? <span className="text-sm text-primary">{status}</span> : null}
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
