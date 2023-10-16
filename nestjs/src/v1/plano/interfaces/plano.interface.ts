import { Plano } from "../entities/plano.entity";

export interface IPlanoRepository {
  create(plano: Plano): Promise<void>;
  update(plano: Plano): Promise<void>;
  findAll(): Promise<Plano[]>;
  findById(id: string): Promise<Plano>;
}