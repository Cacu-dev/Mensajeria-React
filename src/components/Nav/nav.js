import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../../context/loginContext";
import styles from "./nav.module.css";

const Nav = () => {
  const { user, login } = useContext(LoginContext);
  return (
    <nav>
      <Link to="/login">
        {login ? (
          <button className={styles.username}>{user.username}</button>
        ) : (
          <button className={styles.button_login}>{"Login"}</button>
        )}
      </Link>
    </nav>
  );
};

export default Nav;
