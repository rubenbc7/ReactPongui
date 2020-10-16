import React, {useState, Suspense} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';
import "./Auth.css";
import Init from './Init';
import ReactDOM from 'react-dom';
import firebaseConfig from './firebase-config';
import{ FirebaseAppProvider}from 'reactfire';

export default (props) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const login = async ()=>{
        console.log(email,password);
        await firebase.auth().signInWithEmailAndPassword(email,password);
    }

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

    return(
        <div>
            <div className="banner">
               CASSSSSAAAAAA
            </div>
           
            {
             !user &&
             <div>
                 
                 <input type="email" id="email" placeholder="Correo electrónico" onChange={(ev)=> setEmail(ev.target.value)}/>
                  
                 <input type="password" id="password" placeholder="Contraseña" onChange={(ev)=> setPassword(ev.target.value)}/>

                 <div id="a">
                    <button onClick={login}>Iniciar sesión</button>
                 </div>
             </div>
            }
            {
                user && <button onClick={logout}>Cerrar sesión</button>
            }
        </div>
    )
}