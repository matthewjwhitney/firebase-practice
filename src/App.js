import React from 'react';
import firebase from "firebase";

import logo from './logo.svg';
import './App.css';

// Required for side-effects
require("firebase/firestore");

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyCcnBTzMeR4Y9_kvPNkbrDeT9uSp7dY7eo",
    authDomain: "fir-test-30733.firebaseapp.com",
    databaseURL: "https://fir-test-30733.firebaseio.com",
    projectId: "fir-test-30733",
    storageBucket: "fir-test-30733.appspot.com",
    messagingSenderId: "1073866115731",
    appId: "1:1073866115731:web:dd9234a4ddf7b29ee3db66",
    measurementId: "G-HNZ6CM6TZP"
  };

  // Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

db.collection("test").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
