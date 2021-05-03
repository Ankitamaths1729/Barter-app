import firebase from 'firebase'
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBzztCegXYhLXDEjVXSV_RqlvxIEkzg8GA",
    authDomain: "barter-system-8f977.firebaseapp.com",
    databaseURL: "https://barter-system-8f977.firebaseio.com",
    projectId: "barter-system-8f977",
    storageBucket: "barter-system-8f977.appspot.com",
    messagingSenderId: "628324357534",
    appId: "1:628324357534:web:2ba719954cdbd5381ff28f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);