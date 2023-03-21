import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_AUTH,
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC__STORAGE,
//     messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
// };
//For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLT0hV72l7PpeWJungwh4NrwTEEAC7mWM",
    authDomain: "todo-nextjs-9a74d.firebaseapp.com",
    projectId: "todo-nextjs-9a74d",
    storageBucket: "todo-nextjs-9a74d.appspot.com",
    messagingSenderId: "1000641471659",
    appId: "1:1000641471659:web:18f75905c1fd4f4e41c3ee",
    measurementId: "G-F3T7MGPKC5"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)