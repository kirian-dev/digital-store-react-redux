import { removeFromLocalStorage } from './../../shared/helpers/removeFromLocalStorage';
import { setDoc, doc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth, db, provider } from '@/lib/firebase';

export class AuthService {
  public static async register(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
    });

    return user;
  }
  public static async login(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
    });

    return user;
  }
  public static async googleSignIn() {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
    });
    return user;
  }
  public static async logout() {
    removeFromLocalStorage('user');
  }
}
