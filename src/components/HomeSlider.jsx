/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import person1 from '../images/home/person1.png';
import person2 from '../images/home/person2.png';
import person3 from '../images/home/person3.png';
import '../styles/HomeSlider.css';
import chevron from '../images/home/chevron.svg';

function HomeSlider() {
  const [actual, setActual] = useState(1);

  useEffect(() => {
    const interval = setInterval(function() {
      setActual((previous) => {
        if (previous === 2) {
          return 0;
        }
        return previous + 1;
      })
    }, 7000);
    return () => {
      clearInterval(interval)
    }
  }, [])

  const next = () => {
    if (actual > 1) {
      setActual(0);
    } else {
      setActual(actual + 1);
    }
  }

  const previous = () => {
    if (actual < 1) {
      setActual(2);
    } else {
      setActual(actual - 1);
    }
  }

  const stringfyNumber = (number) => {
    if (number === 0) {
      return 'first';
    } else if (number === 1) {
      return 'second';
    }
    return 'third';
  }

  return (
    <>
      <img src={ chevron } alt='previous' className='chevron previous' onClick={previous} />
      <div className={`slider ${stringfyNumber(actual)}`}>
        <div className='slide firstSlide'>
          <img src={ person1 } alt="person" />
          <article>
            <h1>Viaje com segurança!</h1>
            <p>Temos um sistema de rastreamento exclusivo que te garante segurança durante as viagens. Sua localização em tempo real pode ser compartilhada através de um Link.</p>
          </article>
        </div>
        <div className='slide secondSlide'>
          <img src={ person2 } alt="person" />
          <article>
            <h1>Indique motoristas!</h1>
            <p>Você conhece algum motorista de aplicativo? Você pode enviar para ele o Link de download do app de motoristas e receber bonificações por ter feito a indicação!</p>
          </article>
        </div>
        <div className='slide thirdSlide'>
          <img src={ person3 } alt="person" />
          <article>
            <h1>Saiba mais sobre a Lev!</h1>
            <p>Conheça toda a nossa história, de onde surgiu a ideia, como foi nosso começo e como nos tornamos o que somos hoje.</p>
          </article>
        </div>
      </div>
      <img src={ chevron } alt='previous' className='chevron next' onClick={next} />
    </>
  )
}

export default HomeSlider;
