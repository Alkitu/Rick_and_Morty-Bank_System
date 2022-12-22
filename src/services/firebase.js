import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXIsX93R2jMO52dA2Xhoz_861GAVo-yzI",
  authDomain: "rick-and-morty-bank-system.firebaseapp.com",
  projectId: "rick-and-morty-bank-system",
  storageBucket: "rick-and-morty-bank-system.appspot.com",
  messagingSenderId: "711933629085",
  appId: "1:711933629085:web:fb3072a32280dd5194ba74",
  measurementId: "G-1194DDSKW5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
