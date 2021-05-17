import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


const Navbar =() => {

return(
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" style={{marginLeft:"3rem"}}>MERNPROJECT</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav" style={{marginLeft:"35rem"}}>
      <Link to="/" className="nav-item nav-link active">Home</Link>
      <Link to="/Story" className="nav-item nav-link">Story</Link>
      <Link to="/Create" className="nav-item nav-link">Create</Link>
     
    </div>
  </div>
</nav>
</div>
);


}

export default Navbar;