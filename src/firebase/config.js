import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCouAgndOQPYabc52fbeLeJgTnW1Wcm2cI",
    authDomain: "olx-clone-9ce91.firebaseapp.com",
    projectId: "olx-clone-9ce91",
    storageBucket: "olx-clone-9ce91.appspot.com",
    messagingSenderId: "559659239491",
    appId: "1:559659239491:web:5c07c9209b754e3eb0acf6",
    measurementId: "G-36SG83DXDR"
  };

  export default  firebase.initializeApp(firebaseConfig)