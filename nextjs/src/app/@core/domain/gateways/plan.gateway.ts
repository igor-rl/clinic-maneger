import { Plan } from "../entities/plan";

export interface PlanGateway{
  findAll(): Promise<Plan[]>
  findById(id:string):Promise<Plan>
}