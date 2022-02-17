import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCEQbgperki1cbdmD21o2VmM-ydCn_wzTw',
  authDomain: 'dashboard-d8b5a.firebaseapp.com',
  projectId: 'dashboard-d8b5a',
  storageBucket: 'dashboard-d8b5a.appspot.com',
  messagingSenderId: '188753368271',
  appId: '1:188753368271:web:a0c08f9a013fbabdf1d3ba',
};

class Firebase {
  private auth;

  constructor() {
    const firebaseApp = initializeApp(firebaseConfig);
    this.auth = getAuth(firebaseApp);
  }

  createUser = async (email: string, password: string) => {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  loginUser = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      console.log({ user });
      return user;
    } catch (error) {
      console.log(error);
    }
  };

  signOut = async () => await signOut(this.auth);

  monitorAuthState = async () => {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        console.log({ user });
        //showApp
      } else {
        // not logged in
      }
    });
  };
}

export default Firebase;
