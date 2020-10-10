import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Auth';
import {useUser} from 'reactfire';

import {
  useFirebaseApp
} from 'reactfire'

function App() {
  const firebase = useFirebaseApp();
  const user = useUser();
  console.log(firebase);
  return (
    <div className="App">
    { user && <p>Usuario: {user.email}</p>}
     <Auth />
    </div>
  );
}

export default App;
