import React from 'react';
import './App.css';
import Init from './Init';
import {useUser} from 'reactfire';

import {
  useFirebaseApp
} from 'reactfire'
import HomeFisio from './HomeFisio';

function App() {
  const firebase = useFirebaseApp();
  const user = useUser();
  console.log(firebase);
  firebase.auth().signOut();
  return (
    <div className="App">
    { user && <p>Usuario: {user.email}</p>}
     <HomeFisio />
     
    </div>
  );
}


export default App;
