import React from 'react';
import styles from '../../styles/Driver.module.css';
import person from '../../images/driver/person.png';
import logoMinimal from '../../images/logo-minimal.svg';
import BenefitsCard from '../../components/BenefitsCard';
import money from '../../images/driver/benefits/money.svg';

function Driver() {
  const { container, mainContent } = styles;
  return (
    <main className={container}>
      <section className={mainContent}>
        <article>
          <h2>Motorista</h2>
          <h1>Venha fazer parte do time de motoristas mais valorizado do Brasil!</h1>
          <p>Mais rápido. Mais barato. Pega Lev</p>
          <button>Quero ser motorista</button>
        </article>
        <img src={person} alt="" />
      </section>
      <section>
        <div>
          <img src={ logoMinimal } alt="logo-minimal" />
          <h1>Benefícios do motorista Lev.</h1>
        </div>
        <div>
          <BenefitsCard img={money} title={"Menor Taxa."} text={"Aqui quem leva a maior fatia é você, temos as menores taxas do mercado!"} />
        </div>
      </section>
    </main>
  );
}

export default Driver;
