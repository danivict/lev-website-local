import React from 'react'
import logo from '../images/driver/calculator/logo.svg';
import styles from '../styles/Calculator.module.css';

function Calculator() {

  const { container } = styles;

  return (
    <div className={ container }>
      <header>
        <img src={ logo } alt="Logo" />
        <h1>Lev</h1>
      </header>
      <form>
        <label htmlFor="days">
          Dias Trabalhados:
          <input type="number" id="days"/> 
        </label>
        <label htmlFor="runs">
          Corridas ao dia:
          <input type="number" id="days"/>
        </label>
        <label htmlFor="gasCost">
          Valor da gasolina:
          <input type="number" id="days"/>
        </label>
        <label htmlFor="gasSpent">
          Consumo médio:
          <input type="number" id="days"/>
        </label>
        <label htmlFor="runPrice">
          Valor médio da corrida:
          <input type="number" id="days"/>
        </label>
      </form>
      <article>
        <p>Total Bruto:</p>
        <p>Total - Taxa:</p>
        <p>Total - Taxa e Gasolina:</p>
      </article>
    </div>
  )
}

export default Calculator