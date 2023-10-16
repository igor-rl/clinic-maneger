import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'planos',
  timestamps: true,
  paranoid: true,
})
export class PlanoModel extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    validate: {
      len: [2, 255], // mínimo de 2 caracteres e máximo de 255
    },
  })
  titulo: string;

  @Column({
    type: DataType.STRING(500),
    allowNull: true,
  })
  descricao: string | null;

  @Column({
    type: DataType.DECIMAL(10, 2),
    defaultValue: 0,
    validate: {
      min: 0,
    },
  })
  preco: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  })
  periodo_teste: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1,
    },
  })
  max_matriz: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1,
    },
  })
  max_filiais: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1,
    },
  })
  colaboradores: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  })
  convites: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  ativo: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  validade: Date | null;
}
