export type Plan = {
  id?: string;
  titulo?: string;
  descricao?: string | null;
  preco?: number | null;
  periodo_teste?: number | null;
  max_matriz?: number | null;
  max_filiais?: number | null;
  colaboradores?: number | null;
  convites?: number | null;
  ativo?: boolean | null;
  validade?: Date | null;
}

export class Plano implements Plan {
  id?: string;
  titulo?: string;
  descricao?: string | null = null;
  preco?: number | null = null;
  periodo_teste?: number | null;
  max_matriz?: number | null = null;
  max_filiais?: number | null = null;
  colaboradores?: number | null = null;
  convites?: number | null = null;
  ativo?: boolean | null = null;
  validade?: Date | null = null;

  constructor(props: Plan) {
    Object.assign(this, props);
  }
}