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

class App extends React.Component{
    state = {
        Inventario:null
    }

    componentDidMount(){
        console.log('aaa')
        db.collection('Inventario').doc("f2Yz3bGg7KJrpsI9qdM5")
          .get()
          .then(snap => {
              const Inventario = []
              
                  const data = snap.data()
                  Inventario.push(data)
              
              this.setState({Inventario: Inventario})
              console.log(snap)
          })
          .catch(error => console.log(error))
    }

    /*.then(function(docRef) {
        db.collection("cities").doc(docRef.id).get()
          .then(snap => {
             console.log('Here is the document you wrote to', snap.data()
           })
     })*/
    
    render(){
        return(
            <div className="App">
              <h1>Especificaciones del equipo médico</h1>
              {
                  this.state.Inventario &&
                  this.state.Inventario.map( Inventario => {
                      return(
                          <div>
                              <p>{Inventario.EQUIPO}</p>
                              <p>{Inventario.MODELO}</p>
                              <p>{Inventario.MARCA}</p>
                          </div>

                      )
                  })
                
              }
              
            </div>
        )

    }
}

export default App