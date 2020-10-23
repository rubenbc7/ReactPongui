import React, {useState, Suspense} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
import "./Auth.css";
import Init from './Init';
import Qrscanner from './Qrscanner';
import ReactDOM from 'react-dom';
import firebaseConfig from './firebase-config';
import{ FirebaseAppProvider}from 'reactfire';

export default (props) => {

    const firebase = useFirebaseApp();
    const user = useUser();

    const logout = async()=>{
       await  firebase.auth().signOut();
       return (
        ReactDOM.render((
            <FirebaseAppProvider firebaseConfig={firebaseConfig}>
              <Suspense fallback={'Conectando a firebase...'}>
                <Init />
              </Suspense>
            </FirebaseAppProvider>
              ), document.getElementById('root')
          )
      );
    }
    
    const ScanQr = async ()=>{
      console.log("Escaner");
      return (
          ReactDOM.render((
              <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                <Suspense fallback={'Conectando a firebase...'}>
                  <Qrscanner />
                </Suspense>
              </FirebaseAppProvider>
                ), document.getElementById('root')
            )
        );
      
  }

    return(
        <div>
            <div className="banner">
               Bienvenido Fisioterapeuta
            </div>
                <button onClick={ScanQr}>Escanear Código QR</button>
                <button onClick={logout}>Cerrar sesión</button>
            
        </div>
    )
}