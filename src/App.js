import React,{useContext,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { AuthContext } from './store/Context';
import { FirebaseContext } from './store/Context';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {firebase} = useContext(FirebaseContext)
  const {setUser} = useContext(AuthContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    })
  
  return (
    <div>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
        <Route path='/login'>
        <Login></Login>
        </Route>
      </Router>
    </div>
  );
}

export default App;
