import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProfilePhoto from './ProfilePhoto.jsx'
import Apps from './assets/appsicon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BottomNav from './assets/BottomNav.jsx'

import GoogleLogo from './GoogleLogo.jsx'
import './App.css'


function App() {

  return (
    <div className="body">
      <nav className="nav-container container-fluid align-items-center">
        <ul className="navbar-left">
          <a href="#">About</a>
          <a href="#">Store</a>
        </ul>
        <ul className="navbar-right">
          <a href="#">Gmail</a>
          <a href="#">Images</a>
          <a href="#"><FontAwesomeIcon icon={faFlask} className="labs-icon"/></a>
          <a href="#" ><img src={Apps} className="apps-icon"/></a>
          <a href="#"><ProfilePhoto  className="profile-photo"/></a>
        </ul>
      </nav>
      <GoogleLogo />
      <BottomNav />
    </div>
  )
}

export default App
