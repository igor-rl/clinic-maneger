"use client";

import { MetodoPagamento, Pedido } from "@/app/models/contrato.model";
import { useState } from "react";

async function contratarPlano(data: Pedido) {
  console.log(data)
  const response = await fetch(`/api/pedido`,{
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  return response;
}

export default function FormContratarPlano({
  params,
}: {
  params: { id: string };
}) {
  const [metodo_pagamento, setPaymentMethod] = useState("pix");
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    const pedido = new Pedido({
      id_plano: params.id,
      metodo_pagamento: value.metodo_pagamento as MetodoPagamento,
      cardNumber: value.cardNumber as string,
      expiryDate: value.expiryDate as string,
      cvv: value.cvv as string,
    });
    const response = await contratarPlano(pedido);
    console.log(response);
  };
  return (
    <>
      <form action="/" method="post" onSubmit={handleSubmit}>
        <select
          name="metodo_pagamento"
          className="bg-slate-700"
          value={metodo_pagamento}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="pix">PIX</option>
          <option value="cartao">CARTÃO DE CRÉDITO</option>
        </select>

        {metodo_pagamento === "cartao" && (
          <>
            <br />
            <label>
              Número do Cartão:
              <input
                type="text"
                name="cardNumber"
                placeholder="1234 5678 1234 5678"
              />
            </label>
            <br />
            <label>
              Validade:
              <input type="text" name="expiryDate" placeholder="MM/AA" />
            </label>
            <br />
            <label>
              CVV:
              <input type="text" name="cvv" placeholder="123" />
            </label>
            <br />
          </>
        )}
        <br />
        <button type="submit" className="border">
          confirmar
        </button>
      </form>
    </>
  );
}
