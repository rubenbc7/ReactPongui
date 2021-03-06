import React, {Suspense} from 'react';
import 'firebase/auth';
import "./Auth.css";
import Auth from './Auth';
import ReactDOM from 'react-dom';
import firebaseConfig from './firebase-config';
import{ FirebaseAppProvider}from 'reactfire';

export default (props) => {
    

    const login = async ()=>{
        console.log("iniciar sesión");
        return (
            ReactDOM.render((
                <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                  <Suspense fallback={'Conectando a firebase...'}>
                    <Auth />
                  </Suspense>
                </FirebaseAppProvider>
                  ), document.getElementById('root')
              )
          );
        
    }


    return(
        <div>
            <img src="\Images\LogoPongui.jpg" alt=""/>
            <div className="banner">
               Clínica de fisioterapia
            </div>
           
            {
             
             <div>
                <div id="b" >
                     <button onClick={login}>Iniciar sesión</button>
                 </div> 
             </div>
            }
            
        </div>
    )
}