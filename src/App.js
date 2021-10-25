import "./App.css";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Home from "./pages/home";
import Header from "./components/header";
import Loader from "./components/loader";
import Login from "./pages/login";

const auth = getAuth();
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.info("user=>", user);
        setUser(user);
        const uid = user.uid;
        setLoading(false);
      } else {
        console.error("ERROR: No hay usuario registrado");
        setLoading(false);
      }
    });
  }, []);

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        console.info("logout success");
        // Sign-out successful.
        window.location.reload();
        setLoading(false);
      })
      .catch((error) => {
        console.error("logout error", error);
        // An error happened.
        setLoading(false);
      });
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
    <div className="App">
      {user ? <Header logout={logout} /> : <div></div>}
      {user ? <Home /> : <Login />}
    </div>
  );
}

export default App;
