import { initializeApp } from "firebase/app";

import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDQLmouyP_bpmXhIvl8Oh_vNtVPogA42F4",
  authDomain: "chatter-b0c82.firebaseapp.com",
  projectId: "chatter-b0c82",
  storageBucket: "chatter-b0c82.appspot.com",
  messagingSenderId: "882186071546",
  appId: "1:882186071546:web:32f72fcf5f23a398ef4843"
};

const app = initializeApp(firebaseConfig);

const realtime = getDatabase(app);

export default realtime;