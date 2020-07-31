import React from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "./firebase";

function App() {
  const messaging = firebase.messaging();
  messaging
    .requestPermission()
    .then(() => {
      return messaging.getToken();
    })
    .then((token) => {
      console.log("token = ", token);
      prompt("token", token);
    })
    .catch((err) => {
      console.log("err = ", err);
    });

  return <div className="App">Progressive Web-app</div>;
}

export default App;
