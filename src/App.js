import "./App.css";
import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Home from "./pages/home";
import Login from "./pages/login";
function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      const uid = user.uid;
    } else {
      console.error('ERROR: No hay usuario registrado')
    }
  });
  return <div className="App">{user ? <Home /> : <Login />}</div>;
}

export default App;
