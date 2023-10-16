type IPedido = {
  id?: string;
  id_usuario?: string;
  id_plano: string;
  metodo_pagamento: MetodoPagamento;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

export enum MetodoPagamento {
  pix = "pix",
  cartao = "cartao"
}

export class Pedido implements IPedido {
  id?: string;
  id_usuario?: string;
  id_plano!: string;
  metodo_pagamento!: MetodoPagamento;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;

  constructor(data?: Partial<IPedido>) {
    Object.assign(this, data);
  }
}
