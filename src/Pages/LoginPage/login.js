import styles from "./login.module.css";
const Login = ({ inputHandler, submitHandler, error }) => {
  return (
    <div className={styles.formContainer}>
      <h3 className={styles.error_text}>{error}</h3>
      <h1 className={styles.login_title}>LOGIN</h1>
      <form>
        <input
          className={styles.input}
          type="text"
          name="userOrEmail"
          placeholder="Ingresá tu username o email"
          onChange={inputHandler}
        />

        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Ingresá tu password"
          onChange={inputHandler}
        />
        <button className={styles.button_form} onClick={submitHandler}>
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Login;
