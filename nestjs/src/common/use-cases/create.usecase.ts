import { Injectable } from "@nestjs/common";
import { Model } from "sequelize";
import { ICreateModel } from "../interface/create-model.interface";

@Injectable()
export class CreateUseCase<T extends ICreateModel, Dto extends T["_creationAttributes"]> {
  constructor(
    private readonly repo: typeof Model & { new(): T }
  ) { }

  async execute(dto: Dto): Promise<T> {
    return await this.repo.create(dto);
  }
}
