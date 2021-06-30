// @component/footer/index.js

import css from "./footer.module.css";

export default function Footer({ children }) {
  return (
    <>
      <div className={css.footer}>
        <div className={css.footerRow}>
          <div className={css.footerCol}>
            <h4>Camisas 100% Algodão</h4>
            <ul>
              <li>Premium Extra</li>
              <li>Premium</li>
              <li>Quality</li>
              <li>Promo</li>
            </ul>
          </div>
          <div className={css.footerCol}>
            <h4>Estamparia</h4>
            <ul>
              <li>Arte Final</li>
              <li>Revelação de Tela</li>
              <li>Serigrafia</li>
              <li>Sublimação</li>
            </ul>
          </div>
          <div className={css.footerCol}>
            <h4>Impressão</h4>
            <ul>
              <li>Impressão Digital</li>
              <li>Adesivos</li>
              <li>Cartões</li>
              <li>Folhetos</li>
            </ul>
          </div>
          <div className={css.footerCol}>
            <h4>Contato</h4>
            <ul>
              <li>Newsletter</li>
              <li>Atendimento Whatsapp</li>
              <li>Redes Sociais</li>
              <li>Prime</li>
            </ul>
          </div>
        </div>
        <div className={css.footerRow}>
          <h3 style={{ padding: "12px" }}>Árvore da Vida</h3>
          <p>CNPJ: 07.865.795/0001-40 </p>
        </div>
      </div>
    </>
  );
}
