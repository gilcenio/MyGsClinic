import { db } from "../../Firebase";
import { addPlansAcess, getPlanAcess, getPlansAcess, setPlansAcess, updatePlansAcess } from "../dataAcess/plansAcess";
import { collection, CollectionReference } from 'firebase/firestore';

const defaultCollection = 'companies';

export async function addPlansAction(body: any, collectionRef: CollectionReference = collection(db, defaultCollection)) {
  const response = await addPlansAcess(body, collectionRef);
  return response;
}

export async function setPlansAction(id: string, body: any, collectionRef: CollectionReference = collection(db, defaultCollection)) {
  const response = await setPlansAcess(id, body, collectionRef);
  return response;
}

export async function updatePlansAction(id: string, body: any, collectionRef: CollectionReference = collection(db, defaultCollection)) {
  const response = await updatePlansAcess(id, body, collectionRef);
  return response;
}

export async function getPlansAction(collectionRef: CollectionReference = collection(db, defaultCollection)) {
  const response = await getPlansAcess(collectionRef);
  const plans: any[] = [];
  response.forEach((doc: any) => {
    plans.push(doc);
  });
  return plans;
}

export async function getPlanAction(documentPath: string) {
  const response = await getPlanAcess(documentPath);

  return response;
}
