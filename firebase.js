// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJCFKJz-WJqgmYStB6DPEQ0zCPFwLFeC0",
    authDomain: "signal-clone-aed43.firebaseapp.com",
    projectId: "signal-clone-aed43",
    storageBucket: "signal-clone-aed43.appspot.com",
    messagingSenderId: "332283259285",
    appId: "1:332283259285:web:76caa117f5f85b2ab3ee9c",
    measurementId: "G-30X3Z70Z7Q"
  };

  let app;
  if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  }else{
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};
