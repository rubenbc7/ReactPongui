import React, { Component, Suspense } from 'react'
import ReactDOM from 'react-dom';
import QrReader from 'react-qr-scanner'
import firebaseConfig from './firebase-config';
import HomeFisio from './HomeFisio';
import {
   FirebaseAppProvider
}from 'reactfire'
 
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }

  Back = async()=>{
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
    if(data !== null){
      this.setState({
        delay:100000000,
        result: data,
      })

      
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
      </div>
    )
  }
}

export default App;