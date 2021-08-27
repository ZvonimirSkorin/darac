import firebase from 'firebase/app'
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAQh1LxAnYGBhkrklPd9IjDQQMfv5cr74g",
  authDomain: "strengthandconditioning.firebaseapp.com",
  projectId: "strengthandconditioning",
  storageBucket: "strengthandconditioning.appspot.com",
  messagingSenderId: "838042575033",
  appId: "1:838042575033:web:49dc78f81db0a055edbb68",
  measurementId: "G-XDRK8PJYNK"
};
  // Initialize Firebase

    function init(){
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
        else firebase.app()
    }
init()

    module.exports = {firebase}

