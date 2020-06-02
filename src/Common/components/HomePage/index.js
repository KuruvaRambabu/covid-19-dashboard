import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../logo.svg'
import { COVID_19_SIGN_IN_PAGE_PATH } from '../../routes/RouteConstants'

function App() {
   return (
      <div className='App'>
         <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
               className='App-link'
               href='https://reactjs.org'
               target='_blank'
               rel='noopener noreferrer'
            >
               Learn React
            </a>
            <Link to={COVID_19_SIGN_IN_PAGE_PATH}>Covid 19 DashBoard</Link>
         </header>
      </div>
   )
}

export default App
