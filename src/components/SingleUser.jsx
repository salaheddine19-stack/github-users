import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const SingleUser = ({ user: { login, avatar_url, html_url } }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  return (
    <article className='card'>
      <button
        onClick={() => setIsFavorite(!isFavorite)}
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
