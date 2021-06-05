import firebase from 'firebase/app';
import	'firebase/firestore';
import	'firebase/auth';

const config= {

	apiKey: "AIzaSyCKBYGESd3E4oGwKd_zJXa2M73TNbVbfu0",
    authDomain: "crwn-db-2605b.firebaseapp.com",
    projectId: "crwn-db-2605b",
    storageBucket: "crwn-db-2605b.appspot.com",
    messagingSenderId: "170632098590",
    appId: "1:170632098590:web:325d2f40f8274e13564f0f",
    measurementId: "G-SYWFH95LTH"

}


firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore = firebase.firestore();


const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=> auth.signInWithPopup(provider);

export default firebase;




 