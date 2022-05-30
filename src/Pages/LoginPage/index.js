import React, { useContext, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
//Pages
import Login from "./login";
//Hooks
import LoginContext from "../../context/loginContext";
// Data
import { users } from "../../data-user/users";

// Styles
import styles from "./login.module.css";

const LoginPage = () => {
  const [error, setError] = useState("");
  const [newUser, setNewUser] = useState({
    userOrEmail: "",
    password: "",
  });
  const { setLogin, setUser } = useContext(LoginContext);
  const navigate = useNavigate();
  // Función para capturar valores de los inputs
  const inputHandler = (e) => {
    let value = e.target.value; //Capturo los valores
    let key = e.target.name; // Capturo al input name que corresponde
    setNewUser({ ...newUser, [key]: value }); // devuelvo un objeto con sus valores
  };

  // Función para capturar valores de los inputs
  const submitHandler = (e) => {
    userLogin();
    e.preventDefault();
  };

  // Función para saber si el usuario esta logueado correctamente
  const userLogin = () => {
    let userFind = users.find(
      (user) =>
        (user.username === newUser.userOrEmail ||
          user.email === newUser.userOrEmail) &&
        user.password === newUser.password
    );
    if (userFind) {
      console.log(userFind);
      setUser(userFind);
      setLogin(true);
      setError("");
      navigate("/");
    } else {
      let errorMessage = "DATOS MAL INGRESADOS. VUELVA A INTENTARLO.";
      setError(errorMessage);
    }
  };

  return (
    <div className={styles.form}>
      <Login
        inputHandler={inputHandler}
        submitHandler={submitHandler}
        error={error}
      />
    </div>
  );
};

export default LoginPage;
