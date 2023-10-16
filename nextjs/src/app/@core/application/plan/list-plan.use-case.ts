import { PlanGateway } from "../../domain/gateways/plan.gateway";
import { Plan } from "../../domain/entities/plan";

export class ListPlanUseCase {
  constructor(private planGateway: PlanGateway) { }

  async execute(): Promise<Plan[]> {
    return this.planGateway.findAll();
  }
}