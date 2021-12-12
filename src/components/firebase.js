import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf4qHvVGa37D69Bw7dvRJEaldIm1jojjY",
  authDomain: "disney-clone-69fef.firebaseapp.com",
  projectId: "disney-clone-69fef",
  storageBucket: "disney-clone-69fef.appspot.com",
  messagingSenderId: "75435983052",
  appId: "1:75435983052:web:688f8f2558dae2f3c3c269",
  measurementId: "G-5TNW2KK69L"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export  { auth, provider, storage };
export default db;
