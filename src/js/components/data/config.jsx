import firebase from 'firebase'

// Inicialización de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCQQjeM7GcouDOw1Nq5Yt1zIPV2wpbXy80",
  authDomain: "coscocaracol-9ce5b.firebaseapp.com",
  databaseURL: "https://coscocaracol-9ce5b.firebaseio.com",
  projectId: "coscocaracol-9ce5b",
  storageBucket: "coscocaracol-9ce5b.appspot.com",
  messagingSenderId: "342343779752",
  appId: "1:342343779752:web:e132bb3207b568f0bf099d",
  measurementId: "G-L9CN65YC7B"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth