import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import About from "./About"
import Projects from "./Projects"
import Others from "./Others"
import Contact from "./Contact"
import '../styles/navbar.css'



function Navbar() {
  return (
    <div>
      <Router>
        <div class="navBar">
          <p class="company">Laura Vivas</p>
          <div className='links'>
            <NavLink ClassName="link active" to='/'>Home</NavLink>
            <NavLink ClassName="link" to='/about'>About</NavLink>
            <NavLink ClassName="link" to='/project'>Projects</NavLink>
            <NavLink ClassName="link" to='/others'>Others</NavLink>
            <NavLink ClassName="link" to='/contact'>Contact</NavLink>
          </div>
        </div>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/about"><About/></Route>
          <Route exact path="/project"><Projects/></Route>
          <Route exact path="/others"><Others/></Route>
          <Route exact path="/contact"><Contact/></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default (Navbar)
