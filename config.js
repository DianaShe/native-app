// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, initializeAuth, getReactNativePersistence, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgS5na7DBQ1t695ZT6cyYEi6E0kJ7pxmo",
  authDomain: "my-contacts-book.firebaseapp.com",
  databaseURL: "https://my-contacts-book-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-contacts-book",
  storageBucket: "my-contacts-book.appspot.com",
  messagingSenderId: "691041058112",
  appId: "1:691041058112:web:30d04fe8e695c19e070ea5",
  measurementId: "G-SRFYKB0MJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence (AsyncStorage),
// });
export const db = getFirestore(app);
export const storage = getStorage(app);
