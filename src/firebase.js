import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
//you could be more specific and put `import { initializeApp } from 'firebase/compat/app';` but either is fine

const firebaseConfig = {
    apiKey: "AIzaSyAdN6QpQGR3Ldc6ev6AeTOoFpD0kJ6OhqE",
    authDomain: "clone-project2-59ef4.firebaseapp.com",
    projectId: "clone-project2-59ef4",
    storageBucket: "clone-project2-59ef4.appspot.com",
    messagingSenderId: "407656076135",
    appId: "1:407656076135:web:1a59ef1ae3af46299795c2"
  };

//adding firebase to our javascript/react/redux app
//another thing is if you did import the specific function above then you would put initializeApp instead of firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

//calling the function from the firebaseConfig  
const db = firebaseApp.firestore()

//initialises the authentication service for us. we use the auth constant every time we want to sigin up, login, or log out
const auth = firebase.auth()

//now we can sign people in and out THROUGH google `GoogleAuthProvider` allows us to sign people in and out THROUGH google
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }