import Header from "@/components/header/";
import Footer from "@/components/footer";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import css from "./layout.module.scss";

const url =
  "https://api.whatsapp.com/send?phone=5521999324792&text=Oi!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20os%20produtos.";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={css.main}>{children}</main>
      <a href={url} className={css.float} target="_blank">
        <WhatsAppIcon className={css.WhatsAppIcon} />
      </a>
      <Footer />
    </>
  );
}
