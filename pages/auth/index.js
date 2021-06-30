import { signIn, signOut, useSession } from "next-auth/client";
//import { useRouter } from "next/router";

import Image from "next/image";
import Layout from "@/component/layout";

import Button from "@material-ui/core/Button";

import Avatar from "@material-ui/core/Avatar";
//import GG from "@/public/auth/g_logo.png";
import FacebookIcon from "@material-ui/icons/Facebook";

//function r() {
//  const router = useRouter();
//  return router;
//}
//
//const query = () => useRouter().query;
//
const myStyle = { width: "20px", paddingRight: "12px" };
const userImage = { width: "96px", height: "96px" };

export default function Auth({ children }) {
  const [session, loading] = useSession();
  //console.log("router");
  //console.log(r());
  return (
    <>
      <Layout>
        {!session && (
          <>
            <h1>Autenticação</h1>
            <br></br>

            <Button
              onClick={() => signIn("google")}
              variant="contained"
              color="default"
            >
              <div style={myStyle}>
                <Image
                  src="/auth/g_logo.png"
                  alt="google logo"
                  layout="responsive"
                  placeholder="blur"
                  width={24}
                  height={24}
                />
              </div>
              Entrar com Google
            </Button>
          </>
        )}
        {session && (
          <>
            <Avatar
              alt={session.user.name}
              src={session.user.image}
              style={userImage}
            />
            Signed in as {session.user.email} <br />
            <Button
              onClick={() => signOut()}
              variant="contained"
              color="primary"
            >
              Sair
            </Button>
          </>
        )}
      </Layout>
    </>
  );
}
