import React, { useState, useEffect, createContext } from 'react'
import { db } from '../firebase/config'

const API_URL = 'https://api.github.com/users?per_page=100'
const SEARCH_URL = 'https://api.github.com/search/users?q='

export const GithubUsersContext = createContext()

export const GithubUsersProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [favoriteUsers, setFavoriteUsers] = useState([])

  const getFavoriteUsers = () => {
    db.collection('users').onSnapshot((snapshot) => {
      const favUsers = snapshot.docs.map((doc) => {
        return {
          docId: doc.id,
          fav: true,
          ...doc.data(),
        }
      })
      setFavoriteUsers(favUsers)
    })
  }

  const addFavoriteUser = (user) => {
    db.collection('users').add(user)
  }
  const removeFavoriteUser = (docId) => {
    db.collection('users').doc(docId).delete()
  }

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
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
  }
  useEffect(() => {
    setLoading(true)
    db.collection('users').onSnapshot((snapshot) => {
      const favUsers = snapshot.docs.map((doc) => {
        return {
          docId: doc.id,
          ...doc.data(),
        }
      })
      setFavoriteUsers(favUsers)
      getUsers()
      setLoading(false)
    })
  }, [])

  const values = {
    users,
    loading,
    searchUsers,
    addFavoriteUser,
    // getFavoriteUsers,
    favoriteUsers,
    removeFavoriteUser,
  }
  return <GithubUsersContext.Provider value={values} children={children} />
}
