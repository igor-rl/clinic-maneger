import { Plan } from "../../domain/entities/plan";
import { PlanGateway } from "../../domain/gateways/plan.gateway";

const url = (id: string) =>
  `${process.env.FAKE_API_URL}/plan/${id}`;

export class PlanFetchGateway implements PlanGateway {
  constructor() {}

  async findAll(): Promise<Plan[]> {
    const response = await fetch(url(''), {
      next: { tags: ["planos"] },
      cache: "force-cache",
    });
    return response.json();
  }

  async findById(id: string): Promise<Plan> {
    const response = await fetch(url(id));
    return response.json();
  }
}