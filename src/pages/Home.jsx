/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { GithubUsersContext } from '../context/context'

// SingleUser component
import SingleUser from '../components/SingleUser'
import Navbar from '../components/Navbar'

const Home = () => {
  const { users, loading, searchUsers } = useContext(GithubUsersContext)
  const [username, setUsername] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    searchUsers(username)
  }

  return (
    <>
      <div className='center'>
        <h1>Home {loading && 'Loading ..'}</h1>
      </div>

      <form onSubmit={onSubmit}>
        <input
          type='search'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          className='search-input'
          placeholder='What are you looking for ?'
        />
      </form>

      <section className='followers'>
        <div className='center'>
          <h3>
            {!loading &&
              users.length === 0 &&
              `No Github User Found under the name (${username})`}
          </h3>
        </div>
        <div className='container'>
          {!loading &&
            users.map((user) => {
              return <SingleUser user={user} key={user.node_id} />
            })}
        </div>
      </section>
    </>
  )
}

export default Home
