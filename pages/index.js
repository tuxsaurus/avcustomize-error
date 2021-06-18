import Head from "next/head";
import styles from "../styles/Home.module.css";

//import Layout from "../components/layout";
import Layout from "@/component/layout";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>avcustomize</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>Main page inside Layout!</h1>
      </Layout>
    </div>
  );
}
