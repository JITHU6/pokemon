import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAVAbrGn2IrIQGumgqnzbaWdCUqio5lDog",
    authDomain: "benny-pokemon-app-123.firebaseapp.com",
    databaseURL: "https://benny-pokemon-app-123.firebaseio.com",
    projectId: "benny-pokemon-app-123",
    storageBucket: "benny-pokemon-app-123.appspot.com",
    messagingSenderId: "770590150776",
    appId: "1:770590150776:web:27d3997418d40b9ad0dd8d"
  };

  const fire=firebase.initializeApp(firebaseConfig);  
  export default fire;
