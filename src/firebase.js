import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBf_oKA7OeQNBSlPabL0JuawO2ArGXNd2M",
    authDomain: "hikari-aa61a.firebaseapp.com",
    databaseURL: "https://hikari-aa61a.firebaseio.com",
    projectId: "hikari-aa61a",
    storageBucket: "hikari-aa61a.appspot.com",
    messagingSenderId: "307642043330",
    appId: "1:307642043330:web:e8b9c6779e4f534daf245b",
    measurementId: "G-0ZTTYTYQQD"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();