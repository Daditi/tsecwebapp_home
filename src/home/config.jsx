 import firebase from 'firebase/app'
 import 'firebase/firestore'
 
  var firebaseConfig = {
    apiKey: "AIzaSyCdNZplBzFkjbk2stFumM7RH0SIQ8NA02w",
    authDomain: "tsec-web.firebaseapp.com",
    databaseURL: "https://tsec-web.firebaseio.com",
    projectId: "tsec-web",
    storageBucket: "tsec-web.appspot.com",
    messagingSenderId: "45309159616",
    appId: "1:45309159616:web:9242bd7814166444"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export const db = firebase.firestore()

  export default firebase