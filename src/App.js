import React, { useEffect, useState } from 'react';
import firebase from "firebase";

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

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

var db = firebase.firestore();

const [data, setData] = useState(null);

useEffect(() => {
  db.collection("test").get().then((result) => result.docs.map(doc => setData(doc.data())));
}, [data, db]);
 

  return (
    <div>
     {data && JSON.stringify(data)}
    </div>
  );
}

export default App;
