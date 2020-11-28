import React from 'react'
import {db, auth} from './firestore-config'

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
        db.collection('Inventario')
          .get()
          .then(snapshot => {
              const Inventario = []
              snapshot.forEach(doc => {
                  const data = doc.data()
                  Inventario.push(data)
              })
              this.setState({Inventario: Inventario})
              console.log(snapshot)
          })
          .catch(error => console.log(error))
    }

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