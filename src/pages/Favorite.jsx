import React, { useContext, useEffect } from 'react'
import SingleUser from '../components/SingleUser'
import { GithubUsersContext } from '../context/context'

const Favorite = () => {
  const { favoriteUsers } = useContext(GithubUsersContext)

  return (
    <>
      <section className='followers'>
        <div className='container'>
          {favoriteUsers &&
            favoriteUsers.map((user, idx) => {
              return <SingleUser user={user} key={idx} />
            })}
        </div>
      </section>
    </>
  )
}

export default Favorite
