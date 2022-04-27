import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import styles from '../styles/Header.module.css';

function Header() {
  const { container, lev } = styles;

  return (
    <header className={ container }>
      <img src={ logo } alt='Logo' />
      <nav>
        <Link to="/driver">Motorista</Link>
        <Link to="/passenger">Passageiro</Link>
        <Link to="/security">Segurança</Link>
        <Link to="/help">Ajuda</Link>
        <Link to="/lev" className={ lev }>Quero ser motorista Lev</Link>
      </nav>
    </header>
  );
}

export default Header;
