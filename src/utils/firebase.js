import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz2t-SrFc9RHG8YptffvS28VFUTqOqEiY",
  authDomain: "twitter-clone-f37d2.firebaseapp.com",
  projectId: "twitter-clone-f37d2",
  storageBucket: "twitter-clone-f37d2.appspot.com",
  messagingSenderId: "1046531084067",
  appId: "1:1046531084067:web:fac429e590042a6127c696"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

