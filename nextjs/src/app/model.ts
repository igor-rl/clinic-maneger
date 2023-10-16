export type Plan = {
  id?: string
  titulo: string
  descricao: string
  preco: string
  max_matriz: number
  max_filiais: number
  colaboradores: number
  convites: string
  ativo: boolean
}

export type Adesao = {
  id?: string
  id_master: string
  role: string
  plano: Plan
  ordem_pagamento: string
  max_clinicas: number
  max_pessoas: number
  max_convites: number
  validade: Date
  ativo: boolean
}

export type OrdemPagamento = {
 id: string
 pessoa: string
 plano: Plan
 instituicao: string
 valor: string
 rastreabilidade: string
 body: string
 status: OrdemPagamentoStatus
}

enum OrdemPagamentoStatus {
  solicitado,        // quando a instituição financeira cria um meio de pagamento e o pagamento está pendente
  gerado,            // quando a instituição financeira cria um meio de pagamento e o pagamento está pendente
  recusado,          // quando a forma de pagamento foi recusada
  aprovado,          // quando o pagamento foi aprovado
}