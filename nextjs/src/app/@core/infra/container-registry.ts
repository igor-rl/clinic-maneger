import { Container } from "inversify";
import { PlanFetchGateway } from "./gateways/plan-fetch.gateway";
import { ListPlanUseCase } from "../application/plan/list-plan.use-case";
import { DetailPlanUseCase } from "../application/plan/detail-plan.uc";

export const Registry = {
  PlanGateway: Symbol.for("PlanGateway"),
  ListPlanUseCase: Symbol.for("ListPlanUseCase"),
  DetailPlanUseCase: Symbol.for("DetailPlanUseCase"),
}

export const container = new Container()

container.bind(Registry.PlanGateway).toDynamicValue(() => {
  return new PlanFetchGateway()
})

container.bind(Registry.ListPlanUseCase).toDynamicValue((context) => {
  return new ListPlanUseCase(context.container.get(Registry.PlanGateway))
})

container.bind(Registry.DetailPlanUseCase).toDynamicValue((context) => {
  return new DetailPlanUseCase(context.container.get(Registry.PlanGateway))
})