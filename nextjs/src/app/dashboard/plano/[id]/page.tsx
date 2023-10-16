import { DetailPlan } from "@/components/dashboard/plano/detalharPlano";
import Link from "next/link";

interface PlanProps {
  params: {
    id: string;
  };
}

export default function Plan({ params }: PlanProps) {
  return (
    <>
      <Link href="/dashboard/plano">Voltar</Link>
      <h1>DETALHES DO PLANO</h1>
      <DetailPlan id={params.id} />
      <br/>
      <Link
        href={`/dashboard/plano/contratar/${params.id}`}
        className="p-3 bg-slate-500 hover:bg-slate-300"
      >
        contratar plano
      </Link>
    </>
  );
}
