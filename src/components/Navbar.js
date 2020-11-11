import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import About from "./About"
import Others from "./Others"
import Contact from "./Contact"


function Navbar() {
  return (
    <div>
      <Router>
        <div class="navbar navbar-expand-lg navbar-light bg-light">
          <p class="navbar-brand">Laura Vivas //  Web Developer</p>
          <div className='navbar-nav mr-auto'>
            <NavLink ClassName="nav-item nav-link active" to='/'>Home</NavLink>
            <NavLink ClassName="nav-item nav-link" to='/about'>About</NavLink>
            <NavLink ClassName="nav-item nav-link" to='/others'>Others</NavLink>
            <NavLink ClassName="nav-item nav-link" to='/contact'>Contact</NavLink>
          </div>
        </div>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/about"><About/></Route>
          <Route exact path="/others"><Others/></Route>
          <Route exact path="/contact"><Contact/></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default (Navbar)
