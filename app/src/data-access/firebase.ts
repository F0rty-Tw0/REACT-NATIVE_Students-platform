import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_NATIVE_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_NATIVE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_NATIVE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_NATIVE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_NATIVE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_NATIVE_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_NATIVE_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

auth.onAuthStateChanged((user) => {
  user ? console.log('Loading user data') : console.log("User doesn't exist");
});

//TODO: move to own lib
export const chatRef = ref(database, 'chat');
