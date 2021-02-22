import React, { Component, Suspense } from 'react'
import ReactDOM from 'react-dom';
import QrReader from 'react-qr-scanner'
import firebaseConfig from './firebase-config';
import HomeFisio from './HomeFisio';
import {db, auth} from './firestore-config'
import {
   FirebaseAppProvider
}from 'reactfire'
var a = 1;
class App extends Component {
    //firestore
    state = {
      Inventario:null
       }

 /* componentDidMount(){
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

    //firestore */
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }

  OrdenShow = async()=>{
    console.log("Boton de Orden");
      document.getElementById("BotonOrden").style.display="none";
      document.getElementById("TextoOrden").style.display="inline";
      document.getElementById("BotonEnviar").style.display="inline";

  }

  EnviarOrden = async()=>{
    console.log("orden enviada");
    db.collection('OrdenDeMantenimiento').add({
      ORDEN : this.state.name
    })
  }

  onInputChange = event =>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]:  value });
  };
  
  Back = async()=>{
    a = 1;
    return (
     ReactDOM.render((
         <FirebaseAppProvider firebaseConfig={firebaseConfig}>
           <Suspense fallback={'Conectando a firebase...'}>
             <HomeFisio />
           </Suspense>
         </FirebaseAppProvider>
           ), document.getElementById('root')
       )
   );
 }

  handleScan(data){
    
    if(a ===1){
      document.getElementById("BotonOrden").style.display="none";
      document.getElementById("TextoOrden").style.display="none";
      document.getElementById("BotonEnviar").style.display="none";
      a = a + 1;
    }

    if(data !== null){
      this.setState({
        delay:100000000,
        result: data,
      })

      document.getElementById("BotonOrden").style.display="inline";

      console.log('aaa')
      db.collection('Inventario').doc(data)
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
    if(data === null){

      this.setState({
        delay:100,
        result: data,
      })

    }
    
   
    console.log(data);
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }
 
    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
        <button onClick={this.Back}>Atrás</button>
        <button id="BotonOrden" onClick={this.OrdenShow}>Orden de Mantenimiento</button>
        <input name="name" type="text" id="TextoOrden" placeholder="Escriba la orden de mantenimiento" value={this.state.name} onChange={this.onInputChange}></input>
        <button id="BotonEnviar" onClick={this.EnviarOrden}>Enviar Orden</button>
      

        <div className="App">
              <h1>Especificaciones del equipo médico</h1>
              {
                  this.state.Inventario &&
                  this.state.Inventario.map( Inventario => {
                      return(
                          <div>
                              <p>Área: {Inventario.AREA}</p>
                              <p>Días transcurridos:{Inventario.DIASTRANSCURRIDOS}</p>
                              <p>Equipo: {Inventario.EQUIPO}</p>
                              <p>Especialista responsable de MP:{Inventario.ESPECIALISTARESPONSABLEMP}</p>
                              <p>Estado: {Inventario.ESTADO}</p>
                              <p>Frecuencia anual de MP: {Inventario.FRECUENCIAANUALDEMP}</p>
                              <p>Función del equipo: {Inventario.FUNCIONDELEQUIPO}</p>
                              <p>IMP: {Inventario.IMP}</p>
                              <p>Inventario: {Inventario.INVENTARIO}</p>
                              <p>Mantenimiento: {Inventario.MANTENIMIENTO}</p>
                              <p>Marca: {Inventario.MARCA}</p>
                              <p>Modelo: {Inventario.MODELO}</p>
                              <p>PI: {Inventario.PI}</p>
                              <p>Próximo MP: {Inventario.PROXIMOMP}</p>
                              <p>Riesgos asociados: {Inventario.RIESGOSASOCIADOS}</p>
                              <p>Serie: {Inventario.SERIE}</p>
                              <p>Tiempo estándar MP por hora: {Inventario.TIEMPOESTANDARMPPORHORA}</p>
                              <p>Último MP:{Inventario.ULTIMOMP}</p>
                          </div>

                      )
                  })
                
              }
              
            </div>

      </div>
    )
  }
}

export default App;