import { Injectable } from "@nestjs/common";
import { Model, WhereOptions } from "sequelize";

@Injectable()
export class FindByIdUseCase<TModel extends Model<TModel>> {
  constructor(
    private readonly repo: typeof Model & { new(): TModel }
  ) { }

  async execute(id: string): Promise<TModel | null> {
    const whereClause: WhereOptions = { id: id as any };
    const plano = await this.repo.findOne({ where: whereClause });
    console.log(plano)
    return plano
  }
}
