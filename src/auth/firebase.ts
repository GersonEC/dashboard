import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCEQbgperki1cbdmD21o2VmM-ydCn_wzTw',
  authDomain: 'dashboard-d8b5a.firebaseapp.com',
  projectId: 'dashboard-d8b5a',
  storageBucket: 'dashboard-d8b5a.appspot.com',
  messagingSenderId: '188753368271',
  appId: '1:188753368271:web:a0c08f9a013fbabdf1d3ba',
};

class Firebase {
  constructor() {
    initializeApp(firebaseConfig);
  }
}

export default Firebase;
