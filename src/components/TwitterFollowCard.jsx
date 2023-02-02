import { useState} from 'react';
import './TwitterFollowCard.css'

const TwitterFollowCard = ({name,username,initialIsFollowing}) =>  {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? "Siguiendo" : "Seguir"

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleFollowing = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div className='box'>
    <div className='box1'>
    <img src={`https://unavatar.io/${username}`}/>
    <div className="followcard">
    <p className="name">{name}</p>
    <span className="username">@{username}</span>
    </div>
    </div>
    <div className='box2'>
    <button className={buttonClassName} onClick={handleFollowing}> {text} </button>
    </div>
    </div>
  )
}

export default TwitterFollowCard

