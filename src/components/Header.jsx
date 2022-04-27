import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg';
import logoLight from '../images/logo-light.svg';
import styles from '../styles/Header.module.css';

function Header({ headerActive }) {
  const { container, lev, active } = styles;
  const navigate = useNavigate();
  
  const logoClickHandler = () => {
    navigate('/');
  }

  return (
    <header className={ `${container} ${headerActive && active}` }>
      <img src={ headerActive? logo : logoLight } alt='Logo' onClick={ logoClickHandler }/>
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
