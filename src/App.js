import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
import Post from './components/Post';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
 
  <Router>
    <div className="App">
   
    <switch>
     <Route path="/Home">Home
     <Home/>
     </Route>

     <Route path="/About"  >
     <About/>
     </Route>

     <Route path="/posts" >
     <Posts/>
     </Route>

     <Route path={"/posts/:id"} >
     <Post/>
     </Route>
     
     </switch>
    </div>
   </Router>
 
  );
}

export default App;
