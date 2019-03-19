import firebase from 'firebase'
import 'firebase/firestore'

// firebase init
const config = {
    apiKey: "AIzaSyCWRkvs5eakxFZaNpjB5Es_hpg8AcRjSCI",
    authDomain: "zendo-digital.firebaseapp.com",
    databaseURL: "https://zendo-digital.firebaseio.com",
    projectId: "zendo-digital",
    storageBucket: "zendo-digital.appspot.com",
    messagingSenderId: "415024453204"
  };
  firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// Collections
const blogCollection = db.collection('blogs')
const usersCollection = db.collection('users')

export {
  db,
  auth,
  currentUser,
  blogCollection,
  usersCollection
}
