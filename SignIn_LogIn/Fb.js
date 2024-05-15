  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDbfSxIj4IYEK3DeHoriYQ9yzAgeMI5ch8",
    authDomain: "stiprojectweb.firebaseapp.com",
    projectId: "stiprojectweb",
    storageBucket: "stiprojectweb.appspot.com",
    messagingSenderId: "16955025698",
    appId: "1:16955025698:web:1c2d42ee5990b1b157dd7b",
    measurementId: "G-69S9J85VYD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);