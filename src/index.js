import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './index.css'

import { GithubUsersProvider } from './context/context'

const root = document.getElementById('root')

ReactDOM.render(<App />, root)
