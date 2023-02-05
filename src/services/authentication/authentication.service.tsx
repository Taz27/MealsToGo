import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCK61AbbXzg5cCqZa8LwnDEvqvHc-pqSoo',
  authDomain: 'mealstogo-49310.firebaseapp.com',
  projectId: 'mealstogo-49310',
  storageBucket: 'mealstogo-49310.appspot.com',
  messagingSenderId: '820237137126',
  appId: '1:820237137126:web:6495f2d60d37cf2884b727',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);
