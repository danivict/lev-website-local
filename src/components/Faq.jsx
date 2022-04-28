import React, { useState } from 'react'
import styles from '../styles/Faq.module.css';

function Faq({ question, answer }) {
  const {
    container,
    questionContainer,
    answerContainer,
    active
  } = styles;

  const [answerActive, setAnswerActive] = useState(false);

  return (
    <div className={ container }>
      <div
        className={ questionContainer }
        onClick={ () => setAnswerActive((prev) => !prev) }
      >
        <h2>{question}</h2>
        <span>icon</span>
      </div>
      <hr />
      <div className={ `${answerContainer} ${answerActive ? active : ''}` }>
        <p>{answer}</p>
      </div>
      {/* <details>
        <summary>{question}</summary>
        <p>{answer}</p>
      </details> */}
    </div>
  )
}

export default Faq;