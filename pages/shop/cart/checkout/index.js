import Layout from "@/components/layout";

import { useRouter } from "next/router";

function getRouteData() {
  //const router = useRouter();
  const { asPath, route, query } = useRouter();
  const { id } = query;
  //const q = query;
  console.log("router");
  //console.log(r());
  return asPath;
}

//console.log("como escrever no console?");

export default function Cart({ children }) {
  const router = useRouter();

  return (
    <>
      <Layout>
        <h1>Checkout</h1>
        <p>Fechar pedido e gerar ordem de pagamento</p>
        <ul>
          <li>Confirmar Entrega: ["Retirada na Loja", "FRETE"]</li>
          <li>Gerar ordem de pagamento</li>
        </ul>
        <p>A partir daqui isso vira um pedido que pode ser acompanhado em</p>
        <p>@/user/orders - lista todos dos pedidos do usuario</p>
        <p>@/user/order/[...id] - visualiza um id específico do usuário.</p>
        {getRouteData()}

        <p>
          Pedido finalizado. Você pode visualizar as atualizações do pedido em:
          @/user/order/3154
        </p>
      </Layout>
    </>
  );
}
