import Link from "next/link";
import { ListPlanUseCase } from "@/app/@core/application/plan/list-plan.use-case";
import { Registry, container } from "@/app/@core/infra/container-registry";

export default async function ListPlans() {
  const useCase = container.get<ListPlanUseCase>(Registry.ListPlanUseCase)
  const plans = await useCase.execute();
  return (
    <>
      <h1>Lista de Planos</h1>
      {plans.map((plan:any) => (
        <li key={plan.id}>
          <Link href={`plano/${plan.id}`}>
            {plan.titulo} - {plan.preco}
          </Link>
        </li>
      ))}
    </>
  );
}