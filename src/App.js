import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { GithubUsersContext } from './context/context'
import { GithubUsersProvider } from './context/context'

// pages
import Home from './pages/Home'
import Favorite from './pages/Favorite'

// navbar component
import Navbar from './components/Navbar'
import Error from './pages/Error'

export const App = () => {
  return (
    <main>
      <h1>App.js</h1>

      <GithubUsersProvider>
        <Home />
        {/* <Favorite /> */}
      </GithubUsersProvider>
    </main>
  )
}
