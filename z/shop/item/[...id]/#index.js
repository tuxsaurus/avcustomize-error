import Layout from "@/component/layout";

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

export default function About({ children }) {
  const router = useRouter();

  if (getRouteData() === "/shop/item/tshirt") {
    return (
      <>
        <Layout>
          <h1>Item id</h1>
          <h2> Camisa saindo </h2>
          {getRouteData()}
          <button type="button" onClick={() => router.push("/about")}>
            Click me
          </button>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <h1>Item id</h1>
        {getRouteData()}
      </Layout>
    </>
  );
}
