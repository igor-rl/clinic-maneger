import { Module } from '@nestjs/common';
import { PlanoController } from './plano.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PlanoModel } from './entities/plano.model';
import { CreatePlanoUseCase } from './use-cases/create-plano.usecase';
import { FindAllPlanoUseCase } from './use-cases/find-all-plano.usecase';
import { FindPlanoByIdUseCase } from './use-cases/find-by-id-plano.usecase';
import { SetStatusValidadeUseCase } from './use-cases/set-status-validade-plano.usecase';

@Module({
  imports:[SequelizeModule.forFeature([PlanoModel])],
  controllers: [PlanoController],
  providers: [
    CreatePlanoUseCase,
    FindAllPlanoUseCase,
    FindPlanoByIdUseCase,
    SetStatusValidadeUseCase,
  ],
})
export class PlanoModule {}
