import React from 'react';
import Create from './components/Create';
import Home from './components/Home';
import Story from './components/Story';
import Navbar  from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router >
  <Navbar />
  <br/>
  <Route path="/" exact component={Home}/>
  <Route path="/Create" exact component={Create}/>
  <Route path="/Story" exact component={Story}/>
  </Router>
    </div>
  );
}

export default App;
