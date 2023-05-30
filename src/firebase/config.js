import firebase from 'firebase/app';
// firestore packages
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Authentication packages
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyD-w9HvhajEwroqc6GGyC4HIXqGMuIM8BQ',
  authDomain: 'mymoney-fa770.firebaseapp.com',
  projectId: 'mymoney-fa770',
  storageBucket: 'mymoney-fa770.appspot.com',
  messagingSenderId: '79079327750',
  appId: '1:79079327750:web:9de714c9dc81a80ea65b87',
};
initializeApp(firebaseConfig);
// initialize services
const db = getFirestore(); // firestore
const auth = getAuth();
export { db, auth };
