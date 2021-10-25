import "../App.css";
import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../config";
import Alert from "../components/alert";
import Loader from "../components/loader";

function Login() {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const auth = getAuth();

  const correoClave = () => {
    console.log(true);
    console.log("userLogin", userLogin);
    console.log("userLogin email", userLogin.email);
    console.log("userLogin password", userLogin.password);
    setLoading(true);
    // signInWithEmailAndPassword(auth, "zlkamaly@gmail.com", "123456789")
    signInWithEmailAndPassword(auth, userLogin.email, userLogin.password)
      .then((userCredential) => {
        console.info(true);
        const user = userCredential.user;
        console.log("=>>>>>>>>>>>>> user", user);
        setLoading(false);
        // window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
        setMessage("Correo o clave invalida");
        setError(true);
        setUserLogin({ email: "", password: "" });
        const errorCode = error.code;
      });
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    setUserLogin({
      ...userLogin,
      [name]: event.target.value,
    });

    if (userLogin.email || userLogin.password) {
      setDisabled(false);
    }
  };

  if (loading) {
    return (
      <div className="App">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Loader />
      </div>
    );
  }

  return (
    <div className="container">
      <br></br>
      <h1>Iniciar sesión</h1>
      <br></br>
      <form class="row justify-content-md-center" onSubmit={correoClave}>
        <div class="col-lg-4 col-12">
          <label for="staticEmail2" class="visually-hidden">
            Email
          </label>
          <input
            type="text"
            name="email"
            class="form-control"
            id="staticEmail2"
            placeholder="correo electronico"
            required
            onChange={handleChange}
            value={userLogin.email}
          />
          <br></br>
          <label for="inputPassword2" class="visually-hidden">
            Password
          </label>
          <input
            name="password"
            type="password"
            class="form-control"
            id="inputPassword2"
            placeholder="Clave"
            required
            onChange={handleChange}
            value={userLogin.password}
          />

          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
          {/* <button
            type="button"
            class="btn btn-primary mb-3"
            onClick={correoClave}
            disabled={disabled}
          >
            Aceptar
          </button> */}
          {error ? <Alert message={message} /> : <div />}
        </div>
      </form>
    </div>
  );
}

export default Login;
