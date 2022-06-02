import React from 'react';
import styles from '../styles/Footer.module.css';
import logoFooter from '../images/logo-footer.svg';
import appstoreImg from '../images/appstore.svg';
import googleplayImg from '../images/googleplay.svg';

function Footer() {
  const {
    footerSectionTitle,
    storeSection,
    lev,
    logo,
    contatos,
    app,
    seja,
    social,
    copyright, 
  } = styles;

  return (
    <footer>
      <img src={logoFooter} className={ logo } alt='Lev footer' />
      <div className={ contatos }>
        <p className={footerSectionTitle}>Contatos</p>
        <p>Ajuda</p>
        <a href='mailto:contato.lev@gmail.com'>contato.lev@gmail.com</a>
      </div>
      <div className={ app }>
        <p className={footerSectionTitle}>Baixe o app agora!</p>
        <div className={storeSection}>
          <img src={appstoreImg} alt='appstore' />
          <img src={googleplayImg} alt='googleplay' />
        </div>
      </div>
      <div className={ seja }>
        <p className={footerSectionTitle}>Seja motorista Lev!</p>
        <a className={lev} href='#'>
          Quero ser motorista lev
        </a>
      </div>
      <div className={ copyright }>
        <p>Termos de Uso e Privacidade</p>
        <p>© 2022 lev brasil</p>
      </div>
      <div className={ social }>
        <p className={footerSectionTitle}>
          Acompanhe a Lev nas redes sociaisAcompanhe a Lev nas redes sociais
        </p>
        <i className='bi bi-facebook'></i>
        <i className='bi bi-instagram'></i>
        <i className='bi bi-linkedin'></i>
      </div>
    </footer>
  );
}

export default Footer;
