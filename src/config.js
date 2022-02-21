import firebase from "firebase/compat/app";
import 'firebase/compat/auth';


const firebaseConfig ={
  apiKey: "AIzaSyAun39BQAH3zPr4gh1PeGzRLwWZg2xjfRM",
  authDomain: "team-manager-b2b52.firebaseapp.com",
  projectId: "team-manager-b2b52",
  storageBucket: "team-manager-b2b52.appspot.com",
  messagingSenderId: "588980487290",
  appId: "1:588980487290:web:e8aadae65ede92ab2a67c3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth =firebase.auth()
export {auth};