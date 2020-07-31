importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCxX-gIh6ars71yEEgdcyC1RArL_MmaPHI",
  authDomain: "notification-message-5a2a9.firebaseapp.com",
  databaseURL: "https://notification-message-5a2a9.firebaseio.com",
  projectId: "notification-message-5a2a9",
  storageBucket: "notification-message-5a2a9.appspot.com",
  messagingSenderId: "649981733723",
  appId: "1:649981733723:web:3e3a886cbff1416b3e487e",
});

firebase.messaging();
