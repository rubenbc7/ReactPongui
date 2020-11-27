import React from 'react'
import {db, auth} from './firestore-config'
import firebaseConfig from './firebase-config';
import firebase from 'firebase/app'

var docRef = db.collection("Inventario").doc("f2Yz3bGg7KJrpsI9qdM5");

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

/*var ref = firebase.database().ref("Inventario/f2Yz3bGg7KJrpsI9qdM5");
ref.once("value")
  .then(function(snapshot) {
    var name = snapshot.child("f2Yz3bGg7KJrpsI9qdM5").val(); // {first:"Ada",last:"Lovelace"}
    //var firstName = snapshot.child("name/first").val(); // "Ada"
    //var lastName = snapshot.child("name").child("last").val(); // "Lovelace"
    var age = snapshot.child("AREA").val(); // null
    console.log(age);
  });*/

class App extends React.Component{
    
    
    render(){
        return(
            <div className="App">
              <h1>Especificaciones del equipo médico</h1>
              
            </div>
        )

    }
}

export default App