import Layout from "@/component/layout";

import { useRouter } from "next/router";

//function r() {
//  const router = useRouter();
//  return router;
//}
//
//const query = () => useRouter().query;

export default function Auth({ children }) {
  //console.log("router");
  //console.log(r());
  return (
    <>
      <Layout>
        <h1>Auth</h1>
      </Layout>
    </>
  );
}
