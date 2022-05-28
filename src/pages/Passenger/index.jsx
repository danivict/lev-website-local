import React from "react";
import styles from "../../styles/Passenger.module.css";
import car from "../../images/passenger/car.png";
import googleplay from "../../images/googleplay-filled.svg";
import appstore from "../../images/appstore-filled.svg";
import carIcon from "../../images/passenger/cards-icons/car.svg"
import prize from "../../images/passenger/cards-icons/prize.svg"
import hands from "../../images/passenger/cards-icons/hands.svg"
import price from "../../images/passenger/cards-icons/price.svg"
import pointMap from "../../images/passenger/cards-icons/point-map.svg"
import dollar from "../../images/passenger/cards-icons/dollar.svg"
import vLev from "../../images/passenger/cards-icons/vLev.svg"

function Passenger() {
    const {container, mainContent, sectionMain, storeButtons, 
    sectionCards, secCardsTitle, card, first, cards, cardHeader, 
    cardText } = styles;

  return (
    <main>
      <section className={sectionMain}>
        <div className={mainContent}>
          <p>
            <strong>Passageiro</strong>
          </p>
          <h1>Com a gente você chega onde quer.</h1>
          <p>
            Mais rápido. Mais barato. <strong>Pega Lev!</strong>
          </p>
          <div className={storeButtons}>
            <a href="https://apps.apple.com/br/app/moby-app-passageiro/id1483733628" target="_blank"><img src={appstore} alt="appstore" /></a>
            <a href="https://play.google.com/store/apps/details?id=mobyapp.passageiro&hl=en_US&gl=US" target="_blank"><img src={googleplay} alt="google play" /></a>
          </div>
        </div>
        <img src={car} alt="carro lev" />
      </section>

      <section className={sectionCards}>
        <div className={secCardsTitle}>
          <img src={vLev} alt="icone lev" />
          <h2>Vantagens de ser Lev.</h2>
        </div>
        <div className={cards}>
          <div>

            <div className={`${card} ${first}`}>
              <div className={cardHeader}>
                <img src={price} alt="" />
                <h4>Valores justos.</h4>
              </div>
              <div className={cardText}>
                <p>
                  Temos o menor preço do mercado, e pagamos nossos motoristas
                  melhor que a concorrência, isso é ser Lev!
                </p>
              </div>
            </div>
            <div className={card}>
                <div className={cardHeader}>
                    <img src={hands} alt="" />
                    <h4>Fidelização.</h4>
                </div>
                <div className={cardText}>
                    <p>
                        Buscamos sempre oferecer o melhor serviço e realizá-lo com excelência, é por isso que nossos clientes nos amam.
                    </p>
                </div>
            </div>

            <div className={card}>
                <div className={cardHeader}>
                    <img src={pointMap} alt="" />
                    <h4>Segurança e
                        muita praticidade.</h4>
                </div>
                <div className={cardText}>
                    <p>
                        Temos sistemas de rastreamento online que garantem sua segurança e tranquilidade durante as viagens.
                    </p>
                </div>
            </div>

            <div className={card}>
                <div className={cardHeader}>
                    <img src={prize} alt="" />
                    <h4>Sorteio de prêmios.</h4>
                </div>
                <div className={cardText}>
                    <p>
                        Todo mês fazemos diversos sorteios para todos os usuários e outros apenas para os que usam mais o aplicativo.
                    </p>
                </div>
            </div>

            <div className={card}>
                <div className={cardHeader}>
                    <img src={dollar} alt="" />
                    <h4>Cashback por
                        uso do App.</h4>
                </div>
                <div className={cardText}>
                    <p>
                        Temos o menor preço do mercado, e pagamos nossos motoristas melhor que a concorrência, isso é ser Lev!
                    </p>
                </div>
            </div>

            <div className={card}>
                <div className={cardHeader}>
                    <img src={carIcon} alt="" />
                    <h4>Carros específicos.</h4>
                </div>
                <div className={cardText}>
                    <p>
                        Lev Escola, Lev Mulheres, Lev LGBTQI+, e muiiito mais, a gente pensa em TODO MUNDO!
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Passenger;
