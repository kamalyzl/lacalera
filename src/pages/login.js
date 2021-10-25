import "../App.css";
import React, { useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "../config";

function Login() {
  const [email, setEmail] = useState("zlkamaly@gmail.com");
  const [password, setPassword] = useState("123456789");

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.info("USER=>", user);
      const uid = user.uid;
      console.info("USER=>uid", uid);
      // ...
    } else {
      // ...
    }
  });

  const correoClave = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.info(true);
        console.log("=>>>>>>>>>>>>> userCredential", userCredential);
        // Signed in
        const user = userCredential.user;
        console.log("=>>>>>>>>>>>>> user", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="container">
      <br></br>
      <h1>Inicio</h1>
      <form class="row justify-content-md-center">
        <div class="col-3">
          <label for="staticEmail2" class="visually-hidden">
            Email
          </label>
          <input
            type="text"
            name="email"
            class="form-control"
            id="staticEmail2"
            placeholder="correo electronico"
            // value={email}
          />

          <label for="inputPassword2" class="visually-hidden">
            Password
          </label>
          <input
            name="password"
            type="password"
            class="form-control"
            id="inputPassword2"
            placeholder="Clave"
            // value={password}
          />

          <button
            type="button"
            class="btn btn-primary mb-3"
            onClick={correoClave}
          >
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
