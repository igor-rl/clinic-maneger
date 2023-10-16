import { IsString, IsNumber, IsBoolean, IsDate, MinDate, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IPlano } from '../entities/plano.entity';

export class CreatePlanoDto implements IPlano {

  @ApiProperty({ description: 'Título do plano', example: 'Plano Básico' })
  @IsString()
  titulo: string;

  @ApiProperty({ description: 'Descrição do plano', example: 'Descrição detalhada do plano básico', required: false })
  @IsString()
  descricao: string | null;

  @ApiProperty({ description: 'Preço do plano', example: 199.99 })
  @IsNumber()
  preco: number;

  @ApiProperty({ description: 'Período de teste sem cobrança', example: 7 })
  @IsNumber()
  periodo_teste: number;

  @ApiProperty({ description: 'Máximo de matriz', example: 1, required: false })
  @IsNumber()
  max_matriz: number;

  @ApiProperty({ description: 'Máximo de filiais', example: 1, required: false })
  @IsNumber()
  max_filiais: number;

  @ApiProperty({ description: 'Número de colaboradores', example: 1, required: false })
  @IsNumber()
  colaboradores: number;

  @ApiProperty({ description: 'Número de convites', example: 0, required: false })
  @IsNumber()
  convites: number;

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
