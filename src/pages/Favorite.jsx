import React, { useContext, useEffect } from 'react'
import SingleUser from '../components/SingleUser'
import { GithubUsersContext } from '../context/context'

const Favorite = () => {
  return (
    <>
      <section className='followers'>
        <div className='container'>
          <SingleUser />
        </div>
      </section>
    </>
  )
}

export default Favorite
