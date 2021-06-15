import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GithubUsersProvider, GithubUsersContext } from './context/context'

// pages
import Home from './pages/Home'
import Favorite from './pages/Favorite'

// navbar component
import Navbar from './components/Navbar'
import Error from './pages/Error'

export const App = () => {
  return (
    <main>
      <GithubUsersProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/favorite'>
              <Favorite />
            </Route>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
        </Router>
      </GithubUsersProvider>
    </main>
  )
}
