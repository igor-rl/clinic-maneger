import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationDto {
  @ApiPropertyOptional({ description: 'Página de resultados a ser retornada' })
  page?: number;

  @ApiPropertyOptional({ description: 'Quantidade de registros por página' })
  limit?: number;
}
