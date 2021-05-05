import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDckcTx2ZYzs1oBjhkQHo-MA6MiQvAm7Jw",
  authDomain: "slack-clone-yt-c5d5d.firebaseapp.com",
  projectId: "slack-clone-yt-c5d5d",
  storageBucket: "slack-clone-yt-c5d5d.appspot.com",
  messagingSenderId: "655058903038",
  appId: "1:655058903038:web:71fb3bbe82ec81b1b9eaaf"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db};
