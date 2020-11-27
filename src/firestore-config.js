import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase/app'
import firebaseConfig from './firebase-config'

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const db = firebase.firestore()

export default firebase