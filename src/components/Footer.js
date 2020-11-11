import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Contact from "./Contact"
import Home from "./Home"
import About from './About'
import '../styles/navbar.css'

function Footer() {
  return (
    <div class="footer">
      {/* <Router>
        <div class="footer">
          <div className='f-links'>
            <NavLink ClassName="f-link" to='/home'>Home</NavLink>
            <NavLink ClassName="f-link" to='/about'>About</NavLink>
            <NavLink ClassName="f-link" to='/contact'>Contact</NavLink>
          </div>
        </div>
        <Switch>
          <Route exact path="/home"><Home/></Route>
          <Route exact path="/about"><About/></Route>
          <Route exact path="/contact"><Contact/></Route>
        </Switch>
      </Router> */}
    </div>
  )
}

export default Footer



