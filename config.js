import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyAxDJzmR_AgCQsP9qkrfF74ZCqrKzyTp7k",
  authDomain: "wily---main.firebaseapp.com",
  projectId: "wily---main",
  storageBucket: "wily---main.appspot.com",
  messagingSenderId: "866297934406",
  appId: "1:866297934406:web:bfe9fc19347edabb9e1047"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
