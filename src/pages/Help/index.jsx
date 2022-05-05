import React from 'react';
import styles from '../../styles/Help.module.css';
import faq from '../../data/faq';
import Faq from '../../components/Faq';

function Help() {
  const {
    container,
    searchArea,
    magnifierIcon,
    arrowIcon,
    answersArea,
    questionFormArea,
  } = styles;

  return (
    <main className={container}>
      <section className={searchArea}>
        <h1>Como podemos te ajudar?</h1>
        <p>Se não encontrar o precisa aqui, melhor pesquisar!</p>
        <label htmlFor='search'>
          <i className={`bi bi-search ${magnifierIcon}`}></i>
          <input type='text' id='search' placeholder='Qual a sua dúvida?' />
          <i className={`bi bi-arrow-right ${arrowIcon}`}></i>
        </label>
      </section>
      <section className={answersArea}>
        <h1>Perguntas Frequêntes</h1>
        <section>
          <h2>Geral.</h2>
          {faq.map(({ question, answer }, key) => (
            <Faq key={key} question={question} answer={answer} />
          ))}
        </section>
        <section>
          <h2>Motorista.</h2>
          {faq.map(({ question, answer }, key) => (
            <Faq key={key} question={question} answer={answer} />
          ))}
        </section>
        <section>
          <h2>Usuário.</h2>
          {faq.map(({ question, answer }, key) => (
            <Faq key={key} question={question} answer={answer} />
          ))}
        </section>
      </section>
      <section className={questionFormArea}>
        <h1>Ainda tem alguma dúvida?<br/>Manda pra gente!</h1>
        <form action="">
          <input type="text" placeholder='Nome:*' />
          <input type="text" placeholder='Seu E-mail:*' />
          <textarea placeholder='Escreva sua dúvida aqui:*' rows={16} />
          <button type='submit' onClick={(e) => {e.preventDefault()}}>Enviar</button>
        </form>
      </section>
    </main>
  );
}

export default Help;
