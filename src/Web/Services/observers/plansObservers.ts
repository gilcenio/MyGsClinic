import { db } from "../../Firebase";
import { collection, onSnapshot, doc } from 'firebase/firestore';

const plansCollection = collection(db, 'companies')

export function getPlansObservers(id: string | undefined, callback: React.Dispatch<React.SetStateAction<any>>) {
  
  const planDocRef = doc(plansCollection, id)

  onSnapshot(planDocRef, (snapshot) => {
    if (snapshot.exists()) {
      const plan = snapshot.data();
      callback(plan);
    } else {
      console.log('Documento não encontrado.')
    }
  })
}
