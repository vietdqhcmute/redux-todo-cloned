import firebase from "firebase";
import "@firebase/firestore";
import ReduxSagaFirebase from "redux-saga-firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAcqQpskX8M_IbaOdq9pMiicfElTZTsa4k",
  authDomain: "todo-saga-d3c49.firebaseapp.com",
  projectId: "todo-saga-d3c49",
  storageBucket: "todo-saga-d3c49.appspot.com",
  messagingSenderId: "741377171204",
  appId: "1:741377171204:web:ceffcbd477e297d92d7a51",
});
const reduxSagaFirebase = new ReduxSagaFirebase(app);
export default reduxSagaFirebase;
