const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyDK-AFWpxUi0p3jfpkt-KmtEBtqooYQifQ",
  authDomain: "wesopt29-f91b0.firebaseapp.com",
  projectId: "wesopt29-f91b0",
  storageBucket: "wesopt29-f91b0.appspot.com",
  messagingSenderId: "1095399897744",
  appId: "1:1095399897744:web:1491bf8471bfdf0c3ab615",
  measurementId: "G-3LP1ELS9JR",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

module.exports = { firebaseApp, firebaseAuth, firebaseConfig };
