import Head from 'next/head';

import styles from '../styles/pages/Login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <img src="/logo-login.svg" alt="Move.it"/>
        <h1>Bem-Vindo</h1>
        <div>
          <img src="/github-logo.svg" alt="GitHub"/>
          <p>Faça login com seu Github para começar</p>
        </div>
        <div className={styles.input}>
          <input type="text" placeholder="Digite seu username"/>
          <button type="submit"></button>
        </div>
      </div>
    </div>
  );
}
 