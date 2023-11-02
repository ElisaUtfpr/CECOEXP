import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBtiQAMCRVXq0D4QommSpefulXNlCQdoS0",
    authDomain: "reactfirebase-1f574.firebaseapp.com",
    databaseURL: "https://reactfirebase-1f574-default-rtdb.firebaseio.com",
    projectId: "reactfirebase-1f574",
    storageBucket: "reactfirebase-1f574.appspot.com",
    messagingSenderId: "196219392111",
    appId: "1:196219392111:web:74153bde0ccde2905a3d9a"
  };

let app ; 
if (firebaseConfig.apps.length === 0 ){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app()
}

const auth = firebase.auth()

export { auth } ; 