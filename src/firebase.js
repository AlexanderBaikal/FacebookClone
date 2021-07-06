import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCts5VRgaelG4etldBBp0CvjPZ9ga00ut8",
    authDomain: "facebook-clone-8ef13.firebaseapp.com",
    projectId: "facebook-clone-8ef13",
    storageBucket: "facebook-clone-8ef13.appspot.com",
    messagingSenderId: "1020148870701",
    appId: "1:1020148870701:web:10ea08f302679d53ae52a4",
    measurementId: "G-C2C522RF6L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider() 

  export {auth, provider}
  export default db