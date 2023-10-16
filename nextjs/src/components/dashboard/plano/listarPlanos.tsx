import Link from "next/link";

async function getPlan(): Promise<any[]> {
  const response = await fetch(`http://localhost:3001/api/plano`,{
    cache:"no-cache"
  });
  const data = await response.json()
  return data
}

export async function ListPlans() {
  const plans = await getPlan();
  return (
    <div>
      <h1>Lista de planos</h1>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            <Link href={`plano/${plan.id}`}>
              {plan.titulo} - {plan.preco}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
