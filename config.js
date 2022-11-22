import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

export const firebaseConfig = {
    apiKey: "AIzaSyCQj-SLWWsZ_5oAg-IgDWGyzv_WhTeB9_Q",
    authDomain: "eatjuit.firebaseapp.com",
    projectId: "eatjuit",
    storageBucket: "eatjuit.appspot.com",
    messagingSenderId: "447598477643",
    appId: "1:447598477643:web:b464702e7194db09c9a8ce"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}