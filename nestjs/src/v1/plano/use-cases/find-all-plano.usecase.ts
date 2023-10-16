import { Repository } from "sequelize-typescript";
import { PlanoModel } from "../entities/plano.model";
import { InjectModel } from "@nestjs/sequelize";
import { Injectable } from "@nestjs/common";
import { PaginationDto } from "src/common/dto/pagination.dto";
import { Plano } from "../entities/plano.entity";

@Injectable()
export class FindAllPlanoUseCase {
  constructor(
    @InjectModel(PlanoModel)
    private readonly planoRepo: Repository<PlanoModel>
  ) { }

  async execute(pagination: PaginationDto): Promise<PaginatedResult<Plano>> {
    const { page = 1, limit = 10 } = pagination;
    const offset = (page - 1) * limit;
    const { count, rows } = await this.planoRepo.findAndCountAll({
      where:{
        ativo:true
      },
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    });

    return {
      total: count,
      results: rows as Plano[],
      page,
      lastPage: Math.ceil(count / limit),
    };
  }
}