import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC4zbPjhqW6dsDM5wRcaOLQtcybftxs3wE',
  authDomain: 'react-projet-test.firebaseapp.com',
  projectId: 'react-projet-test',
  storageBucket: 'react-projet-test.appspot.com',
  messagingSenderId: '1011267185939',
  appId: '1:1011267185939:web:4132cb53af02b23058fee6',
}

const firebaseConfig = firebase.initializeApp(config)
const db = firebaseConfig.firestore()
const storage = firebase.storage()

export { db, storage }
