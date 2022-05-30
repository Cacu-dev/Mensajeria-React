import React from "react";
import styles from "./errorPage.module.css";
import { Link } from "react-router-dom";

const Error = ({ typeError }) => {
  return (
    <div className={styles.cont}>
      <p className={styles.text}>
        <b>{typeError}</b> | No se encontró esta página
      </p>
      <Link to="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
};

export default Error;
