
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBfk56GV3c0-_zQfe2uYOa5CnpP0jXeT2w",
    authDomain: "primeware-chatapp.firebaseapp.com",
    databaseURL: "https://primeware-chatapp.firebaseio.com",
    projectId: "primeware-chatapp",
    storageBucket: "primeware-chatapp.appspot.com",
    messagingSenderId: "648044185311",
    appId: "1:648044185311:web:b4330d4ef4b23cd8bc0b6a",
    measurementId: "G-G81E530FYP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var database = firebase.database();
