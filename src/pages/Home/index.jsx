import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import styles from '../../styles/Home.module.css';
import phone from '../../images/home/single-phone.svg';
import phones from '../../images/home/dual-phones.svg';
import Footer from '../../components/Footer';


function Home() {
  const { container, firstSection, slogan, spotlight, lowProfile, firstArticle, secondArticle } = styles;

  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    window.onscroll = function() {
      showHeader();
    };
  } , []);

  const showHeader = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
    }
  }

  return (
    <>
      <Header headerActive={ headerActive } />
      <main className={container}>
        <section className={ firstSection }>
          <article className={ firstArticle }>
            <img src={ phone } alt="Smartphone" />
            <div>
              <p className={ slogan }>Vem ser Lev!</p>
              <h1 className={ spotlight }>Baixe agora o App,
                já disponível na região de Florianópolis!</h1>
              <p className={ lowProfile }>Mais rápido. Mais barato. Pega Lev</p>
            </div>
          </article>
          <article className={ secondArticle }>
            <div>
              <p className={ slogan }>Vem ser Lev!</p>
              <h1 className={ spotlight }>Viaje com segurança e sem preocupações!</h1>
              <p className={ lowProfile }>Sistema de rastreamento para acompanhar o trajeto durante sua corrida.</p>
              <button>Saiba mais</button>
            </div>
            <img src={ phones } alt="Smartphones" />
          </article>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Home;
