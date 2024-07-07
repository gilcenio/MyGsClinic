import { db } from "../../Firebase";
import { collection, addDoc, doc, setDoc, updateDoc, getDocs, DocumentData, DocumentSnapshot, CollectionReference, DocumentReference, getDoc } from 'firebase/firestore';

const defaultCollection = 'companies';

export async function addPlansAcess(body: any, collectionRef: CollectionReference = collection(db, defaultCollection)) {
  const response = await addDoc(collectionRef, body);
  return response;
}

export async function setPlansAcess(id: string, body: any, collectionRef: CollectionReference = collection(db, defaultCollection)) {
  const docRef = doc(collectionRef, id);
  const response = await setDoc(docRef, body);
  return response;
}

export async function updatePlansAcess(id: string, body: any, collectionRef: CollectionReference = collection(db, defaultCollection)) {
  const docRef = doc(collectionRef, id);
  const response = await updateDoc(docRef, body);
  return response;
}

export async function getPlansAcess(collectionRef: CollectionReference = collection(db, defaultCollection)): Promise<any[]> {
  const response = await getDocs(collectionRef);
  const plans: any[] = [];
  response.forEach((doc: DocumentSnapshot<DocumentData>) => {
    plans.push(doc.data());
  });
  return plans;
}

export async function getPlanAcess(documentPath: string): Promise<any | null> {
  const docRef: DocumentReference<DocumentData> = doc(db, documentPath);

  const response = await getDoc(docRef);
  
  return response.data();
}

