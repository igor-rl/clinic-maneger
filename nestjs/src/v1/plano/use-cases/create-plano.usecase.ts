import { Repository } from "sequelize-typescript";
import { CreatePlanoDto } from "../dto/create-plano.dto";
import { PlanoModel } from "../entities/plano.model";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateUseCase } from "src/common/use-cases/create.usecase";

@Injectable()
export class CreatePlanoUseCase extends CreateUseCase<PlanoModel, CreatePlanoDto> {
  constructor(
    @InjectModel(PlanoModel)
    planoRepo: Repository<PlanoModel>
  ) {
    super(planoRepo);
  }
}