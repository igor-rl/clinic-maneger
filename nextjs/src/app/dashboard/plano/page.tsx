import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Adesao, OrdemPagamento } from "@/app/model";
import { ListPlans } from "@/components/dashboard/plano/listarPlanos";
import { getServerSession } from "next-auth";

async function getAdesaoAtiva(id_usuario: string): Promise<Adesao> {
  const response = await fetch(
    `${process.env.FAKE_API_URL}/adesao/${id_usuario}`,
    {
      next: { tags: [`adesao-usuario-${id_usuario}`] },
      cache: "force-cache",
    }
  );
  return response.json();
}

async function getOrdensPendentes(id_usuario: string): Promise<OrdemPagamento[]> {
  const response = await fetch(
    `${process.env.FAKE_API_URL}/ordem-pagamento/${id_usuario}`,
    {
      next: { tags: [`ordem-pagemento-usuario-${id_usuario}`] },
      cache: "force-cache",
    }
  );
  return response.json();
}

export default async function Adesao() {
  const { id } = await getServerSession(authOptions);
  const adesao: Adesao = await getAdesaoAtiva(id);
  const ordens: OrdemPagamento[] = await getOrdensPendentes(id);

  if (Object.keys(adesao).length > 0) {
    return (
      <>
        <h1>SEU PLANO</h1>
        <p>role: {adesao.role}</p>
        <p>
          plano:
          <ul>
            <p>{adesao.plano.titulo}</p>
            <p>{adesao.plano.descricao}</p>
            <p>{adesao.plano.preco}</p>
            <p>{adesao.plano.max_matriz}</p>
            <p>{adesao.plano.max_filiais}</p>
            <p>{adesao.plano.colaboradores}</p>
            <p>{adesao.plano.convites}</p>
            <p>{adesao.plano.ativo}</p>
          </ul>
        </p>
        <p>max_clinicas: {adesao.max_clinicas}</p>
        <p>max_pessoas: {adesao.max_pessoas}</p>
        <p>max_convites: {adesao.max_convites}</p>
        <p>validade: {adesao.validade.toLocaleDateString()}</p>
        <p>status: {adesao.ativo}</p>
      </>
    );
  } else {
    return (
      <>
        <h1>CONTRATE UM PLANO</h1>
        <ListPlans />
        {Object.keys(ordens).length > 0 && (
          <>
            <hr />
            <h1>SUAS ORDENS DE PAGAMENTO PENDENTES</h1>
            {ordens.map((ordem, index) => (
              <div key={ordem.id || index}>
                <p>id: {ordem.id}</p>
                <p>pessoa: {ordem.pessoa}</p>
                <p>plano:</p>
                <ul>
                  <li>{ordem.plano?.titulo}</li>
                  <li>{ordem.plano?.descricao}</li>
                  <li>{ordem.plano?.preco}</li>
                  <li>{ordem.plano?.max_matriz}</li>
                  <li>{ordem.plano?.max_filiais}</li>
                  <li>{ordem.plano?.colaboradores}</li>
                  <li>{ordem.plano?.convites}</li>
                  <li>{ordem.plano?.ativo}</li>
                </ul>
                <p>instituicao: {ordem.instituicao}</p>
                <p>valor: {ordem.valor}</p>
                <p>rastreabilidade: {ordem.rastreabilidade}</p>
                <p>body: {ordem.body}</p>
                <p>status: {ordem.status}</p>
              </div>
            ))}
          </>
        )}
      </>
    ); 
    
  }
}
