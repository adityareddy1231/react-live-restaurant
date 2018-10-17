import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCdyP-45AnkL7xWzHfRsQJjsqhDh3TOM60",
    authDomain: "react-live-restaurant.firebaseapp.com",
    databaseURL: "https://react-live-restaurant.firebaseio.com",
    projectId: "react-live-restaurant",
    storageBucket: "react-live-restaurant.appspot.com",
    messagingSenderId: "729779601428"
}

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());
export { firebaseApp };
export default base;
