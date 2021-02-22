import React, {useState, Suspense} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
import "./Auth.css";
import Home from './Home';
import HomeFisio from './HomeFisio';
import ReactDOM from 'react-dom';
import firebaseConfig from './firebase-config';
import{ FirebaseAppProvider}from 'reactfire';

export default (props) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    var user = firebase.auth().currentUser;


    const login = async ()=>{
        console.log(email,password);
        await firebase.auth().signInWithEmailAndPassword(email,password);
        console.log("Home");
        await verify();
    }

    const verify = async ()=>{
      console.log(firebase.auth().currentUser.email);
      if (firebase.auth().currentUser.email ==="ruben@gmail.com") {
        // User is signed in.
        return (
           ReactDOM.render((
               <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                 <Suspense fallback={'Conectando a firebase...'}>
                   <Home />
                 </Suspense>
               </FirebaseAppProvider>
                 ), document.getElementById('root')
             )
         );
           }

           if (firebase.auth().currentUser.email ==="elpepe@gmail.com") {
            // User is signed in.
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

    }

    return(
        <div>
            <img src="\Images\LogoPongui.jpg" alt=""/>
            <div className="banner">
               Clínica de fisioterapia
            </div>
           
            {
             
             <div>
                 
                 <input type="email" id="email" placeholder="Correo electrónico" onChange={(ev)=> setEmail(ev.target.value)}/>
                  
                 <input type="password" id="password" placeholder="Contraseña" onChange={(ev)=> setPassword(ev.target.value)}/>

                 <div id="a">
                    <button onClick={login}>Iniciar sesión</button>
                 </div>
             </div>
            }
        </div>
    )
}