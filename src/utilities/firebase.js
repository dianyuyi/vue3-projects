import { firebase } from "@firebase/app";
import "@firebase/auth";
import "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDvM58kaoybx9iEOSCKtVYGcdAojDGENR4",
  authDomain: "vue3-projects.firebaseapp.com",
  projectId: "vue3-projects",
  storageBucket: "vue3-projects.appspot.com",
  messagingSenderId: "369014404839",
  appId: "1:369014404839:web:c1a7e33cb1c2f8107a1442",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;
