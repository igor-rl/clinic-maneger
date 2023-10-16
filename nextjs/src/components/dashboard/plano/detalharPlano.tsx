import { Plan } from "@/app/model";

async function getPlan(id:string): Promise<Plan> {
  const response = await fetch(`http://localhost:3001/api/plano/${id}`,{
    cache:"no-cache"
  });
  const data = await response.json()
  return data
}

interface DetailPlanProps {
  id: string;
}

export async function DetailPlan({ id }: DetailPlanProps) {
  const plano = await getPlan(id);
  return (
    <>
      titulo: {plano.titulo}<br/>
      descricao: {plano.descricao}<br/>
      preco: R$ {plano.preco} /mês<br/>
      max_matriz: {plano.max_matriz}<br/>
      max_filiais: {plano.max_filiais}<br/>
      colaboradores: {plano.colaboradores}<br/>
      convites: {plano.convites}<br/>
    </>
  );
}
