import { DetailPlan } from "@/components/dashboard/plano/detalharPlano";
import FormContratarPlano from "@/components/dashboard/plano/formContratarPlano";
import Link from "next/link";
import { useState } from "react";

interface PlanProps {
  params: {
    id: string;
  };
}

export default function Plan({ params }: PlanProps) {
  return (
    <>
      <Link href="/dashboard/plano">Voltar</Link>
      <h1>CONTRAT PLANO</h1>
      {params.id !== undefined && params.id !== "" && (
        <DetailPlan id={params.id} />
      )}
      <br />
      <h1>ESCOLHA A FORMA DE PAGAMENTO</h1>
      <br />
      <br />
      <FormContratarPlano params={{ id: params.id }} />
    </>
  );
}
