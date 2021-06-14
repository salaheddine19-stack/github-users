/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { GithubUsersContext } from '../context/context'

// SingleUser component
import SingleUser from '../components/SingleUser'

const Home = () => {
  const { users, loading } = useContext(GithubUsersContext)
  return (
    <>
      <h1>Home {loading && 'Loading ...'}</h1>

      {!loading &&
        users.map(({ node_id, login, avatar_url, html_url }) => {
          return (
            <div key={node_id}>
              <h5>{login}</h5>
              <img width='100' src={avatar_url} alt={login} />
            </div>
          )
        })}
    </>
  )
}

export default Home
