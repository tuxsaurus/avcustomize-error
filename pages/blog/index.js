import Layout from "@/component/layout";

import { useRouter } from "next/router";

const query = () => useRouter().query;

export default function Blog({ children }) {
  return (
    <>
      <Layout>
        <h1>Blog</h1>
      </Layout>
    </>
  );
}
