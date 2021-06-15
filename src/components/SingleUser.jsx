import React, { useContext, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { GithubUsersContext } from '../context/context'

const SingleUser = ({ user }) => {
  const { docId, login, avatar_url, html_url, node_id } = user
  const { favoriteUsers, addFavoriteUser, removeFavoriteUser } =
    useContext(GithubUsersContext)

  // looks for node_id in firebase
  const favUser = favoriteUsers.find((u) => u.node_id === node_id)
  const [isFavorite, setIsFavorite] = useState(favUser)

  return (
    <article className='card'>
      <button
        onClick={() => {
          if (isFavorite) {
            removeFavoriteUser(docId)
          } else {
            addFavoriteUser(user)
            setIsFavorite(!isFavorite)
          }
        }}
        className={isFavorite ? 'star-icon is-favorite' : 'star-icon'}
      >
        {isFavorite ? <AiFillStar /> : <AiOutlineStar />}
      </button>

      <img src={avatar_url} alt={login} />
      <h4>@{login}</h4>

      <a href={html_url} target='_blank' className='btn' rel='noreferrer'>
        view profile
      </a>
    </article>
  )
}

export default SingleUser
