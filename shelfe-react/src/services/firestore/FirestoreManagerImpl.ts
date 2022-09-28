import { Auth } from "@firebase/auth";
import { deleteDoc, doc, Firestore } from "@firebase/firestore";
import IFirestoreManager from "./IFirestoreManager";

export default class FirestoreManagerImpl implements IFirestoreManager {
  auth: Auth;
  firestore: Firestore;

  constructor(auth: Auth, firestore: Firestore) {
    this.auth = auth;
    this.firestore = firestore;
  }

  async deleteUserData() {
    const docRef = doc(this.firestore, "users", this.auth.currentUser!!.uid);
    await deleteDoc(docRef);

    return this.auth.currentUser!!.delete();
  };

}