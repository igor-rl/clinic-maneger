import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { CreatePlanoDto } from './dto/create-plano.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreatePlanoUseCase } from './use-cases/create-plano.usecase';
import { FindAllPlanoUseCase } from './use-cases/find-all-plano.usecase';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { FindPlanoByIdUseCase } from './use-cases/find-by-id-plano.usecase';
import { SetStatusValidadeUseCase } from './use-cases/set-status-validade-plano.usecase';
import { SetStatusValidadePlanoDto } from './dto/set-status-validade-plano.dto';
import { KeycloakAuthGuard } from '../auth/guards/keycloak.guard';
import { HasRole } from '../auth/gateway/roles.decorator';

@ApiTags('Plano')
@Controller('plano')
export class PlanoController {
  constructor(
    private readonly createPlanoUseCase: CreatePlanoUseCase,
    private readonly findAllPlanoUseCase: FindAllPlanoUseCase,
    private readonly findPlanoByIdUseCase: FindPlanoByIdUseCase,
    private readonly setStatusValidadeUseCase: SetStatusValidadeUseCase,
  ) {}

  @ApiBearerAuth('JWT-auth')
  @UseGuards(KeycloakAuthGuard)
  @HasRole('1.1')
  @Post()
  create(@Body() createPlanoDto: CreatePlanoDto) {
    return this.createPlanoUseCase.execute(createPlanoDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findPlanoByIdUseCase.execute(id);
  }

  @Get()
  findAll(@Query() dto: PaginationDto) {
    return this.findAllPlanoUseCase.execute(dto);
  }

  @ApiBearerAuth('JWT-auth')
  @UseGuards(KeycloakAuthGuard)
  @HasRole('1.2')
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: SetStatusValidadePlanoDto) {
    return this.setStatusValidadeUseCase.execute(id, dto);
  }
}
