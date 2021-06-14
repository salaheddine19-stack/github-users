/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { GithubUsersContext } from '../context/context'

// SingleUser component
import SingleUser from '../components/SingleUser'

const Home = () => {
  const { users, loading } = useContext(GithubUsersContext)
  return (
    <>
      <div className='center'>
        <h1>Home {loading && 'Loading ..'}</h1>
      </div>

      <form>
        <input
          type='search'
          className='search-input'
          placeholder='what are you looking for ?'
        />
      </form>

      <section className='followers'>
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
