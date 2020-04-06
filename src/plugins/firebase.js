import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDYfPpkHqiMTe9ExeWw0Ztl0DnInLDdG20",
    authDomain: "sendmail-5a478.firebaseapp.com",
    databaseURL: "https://sendmail-5a478.firebaseio.com",
    projectId: "sendmail-5a478",
    storageBucket: "sendmail-5a478.appspot.com",
    messagingSenderId: "161545319617",
    appId: "1:161545319617:web:c752b1f85d7761d8261040",
    measurementId: "G-NZKESR3JH8"
};
firebase.initializeApp(config);
export const functions = firebase.functions();
