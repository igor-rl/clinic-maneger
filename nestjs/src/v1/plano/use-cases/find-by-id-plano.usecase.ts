import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { PlanoModel } from "../entities/plano.model";
import { Repository } from "sequelize-typescript";
import { Plano } from "../entities/plano.entity";

@Injectable()
export class FindPlanoByIdUseCase {
  constructor(
    @InjectModel(PlanoModel)
    private readonly planoRepo: Repository<PlanoModel>
  ) { }

  async execute(id:string): Promise<Plano>{
    const plano = await this.planoRepo.findOne({
      where:{
        id, ativo:true
      }
    });
    console.log(plano)
    return plano
  }
}
