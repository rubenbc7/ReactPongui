import React from 'react';
import './App.css';
import Init from './Init';
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
     <Init />
     
    </div>
  );
}


export default App;
