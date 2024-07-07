
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZtm4tgKbrFEM-lobJ5byn1JRsbNwJeRg",
  authDomain: "mygsclinic.firebaseapp.com",
  projectId: "mygsclinic",
  storageBucket: "mygsclinic.appspot.com",
  messagingSenderId: "279032250404",
  appId: "1:279032250404:web:13e27cc7e604eb879b98b1",
  measurementId: "G-FME6LCY4M3"
};

const app = initializeApp(firebaseConfig);

// Tipagem adequada para db
const db: Firestore = getFirestore(app);

// Agora você pode usar a propriedade 'collection'
const plansReference = collection(db, 'companies');

export const auth = getAuth()

export { db, plansReference, getAuth };
