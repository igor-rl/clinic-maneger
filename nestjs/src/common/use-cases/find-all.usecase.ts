import { Injectable } from "@nestjs/common";
import { PaginationDto } from "../dto/pagination.dto";
import { IPaginatedModel } from "../interface/paginated-model.interface";
import { Model } from "sequelize";

@Injectable()
export class FindAllUseCase<T extends IPaginatedModel> {
  constructor(
    private readonly repo: typeof Model & { new(): T }
  ) { }

  async execute(pagination: PaginationDto): Promise<PaginatedResult<T>> {
    const { page = 1, limit = 10 } = pagination;
    const offset = (page - 1) * limit;
    const { count, rows } = await this.repo.findAndCountAll({
      limit,
      offset,
      order: [['createdAt', 'DESC']]
    });

    return {
      total: count,
      results: rows as T[],
      page,
      lastPage: Math.ceil(count / limit),
    };
  }
}

