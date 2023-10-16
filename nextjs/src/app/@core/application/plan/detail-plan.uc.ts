import { PlanGateway } from "../../domain/gateways/plan.gateway";
import { Plan } from "../../domain/entities/plan";

export class DetailPlanUseCase {
  constructor(private planGateway: PlanGateway) { }

  async execute(id:string): Promise<Plan> {
    return this.planGateway.findById(id);
  }
}