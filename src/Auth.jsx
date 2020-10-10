import React, {useState} from 'react';
import 'firebase/auth';
import {useFirebaseApp, useUser} from 'reactfire';

export default (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async ()=>{
        console.log(email,password);
        await firebase.auth().createUserWithEmailAndPassword(email,password);
    }

    const login = async ()=>{
        console.log(email,password);
        await firebase.auth().signInWithEmailAndPassword(email,password);
    }

    const logout = async()=>{
       await  firebase.auth().signOut();
    }

    return(
        <div>
            
            {
             !user &&
             <div>
                 <label htmlFor="email">Correo electrónico</label>
                 <input type="email" id="email" onChange={(ev)=> setEmail(ev.target.value)}/>
                  <label htmlFor="email">Contraseña</label>
                 <input type="password" id="password" onChange={(ev)=> setPassword(ev.target.value)}/>
                 <button onClick={submit}>Registrar cuenta nueva</button>
                 <button onClick={login}>Iniciar sesión</button>
             </div>
            }
            {
                user && <button onClick={logout}>Cerrar sesión</button>
            }
        </div>
    )
}