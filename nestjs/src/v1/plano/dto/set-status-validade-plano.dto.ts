import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePlanoDto } from './create-plano.dto';
import { IsBoolean, IsOptional, IsDate, MinDate } from 'class-validator';
import { Type } from 'class-transformer';

class _UpdatePlanoDto{
  ativo: boolean
  validade: Date | null;
}

export class SetStatusValidadePlanoDto extends PartialType(_UpdatePlanoDto) {

  @ApiProperty({ description: 'Status de ativação do plano', example: false })
  @IsBoolean()
  ativo: boolean;

  @ApiProperty({
    description: 'Data de validade do plano',
    example: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString(), // Exemplo dinâmico de 1 dia a partir da data atual
    required: false
  })
  @IsOptional()
  @IsDate()
  @MinDate(new Date(new Date().setHours(new Date().getHours() + 1))) // Data atual + 1h
  @Type(() => Date) // Para transformar string para Date ao validar
  validade: Date | null;

}
