import React, { useState, useEffect, createContext } from 'react'
import { db } from '../firebase/config'

const API_URL = 'https://api.github.com/users?per_page=100'
const SEARCH_URL = 'https://api.github.com/search/users?q='

export const GithubUsersContext = createContext()

export const GithubUsersProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const searchUsers = (query) => {
    if (query.trim() !== '') {
      setLoading(true)
      fetch(SEARCH_URL + query)
        .then((res) => res.json())
        .then(({ items }) => {
          setUsers(items)
          setLoading(false)
        })
    } else {
      getUsers()
    }
  }

  const getUsers = () => {
    setLoading(true)
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])

  const values = {
    users,
    loading,
    searchUsers,
  }
  return <GithubUsersContext.Provider value={values} children={children} />
}
