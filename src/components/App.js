import React, { Component } from "react";
import List from "./List";
import firebase from "firebase/app";
import Add from "./Add.js";
import Delete from "./Delete";

// Firebaseの設定
const firebaseConfig = {
  apiKey: "AIzaSyAp9nZJeWG98j7fJbjAa0XgYpz9oFVON_I",
  authDomain: "react-test-4c6ab.firebaseapp.com",
  databaseURL: "https://react-test-4c6ab.firebaseio.com",
  projectId: "react-test-4c6ab",
  storageBucket: "react-test-4c6ab.appspot.com",
  messagingSenderId: "462646098716",
  appId: "1:462646098716:web:aa2a123976783d65e1d8d9",
  measurementId: "G-TQ72NFQ5SK"
};

// Firebaseの初期化
firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <div>
        <h1>Sample</h1>
        <List />
        <Add />
        <Delete />
      </div>
    );
  }
}

export default App;
