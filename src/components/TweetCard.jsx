import { useState} from 'react';
import './TweetCard.css'
const TweetCard = ({name,username,tweet,initialRetweets,initialLikes, initialIsRetweteed, initialIsLiked}) =>  {


  const [isRetweeted, setIsRetweeted] = useState(initialIsRetweteed)
  const [isLiked, setIsLiked] = useState(initialIsLiked)

  const handleIsRetweeted = () => {
    setIsRetweeted(!isRetweeted)
  }

  const handleIsLiked = () => {
    setIsLiked(!isLiked)
  }

  const buttonClassNameret = isRetweeted
  ? 'ret-true'
  : 'ret-false'

  const buttonClassNamelike = isLiked
  ? 'like-true'
  : 'like-false'

  return (
    <section>
    <img src={`https://unavatar.io/${username}`}/>
    <div className="text">
    <span className='name'>{name} <span className="username">@{username}</span></span>
    <span className='tweet'>{tweet}</span>
    <div className="stats">
    <button onClick={handleIsLiked}><svg className={buttonClassNamelike} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"> <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
    </button>
    <span className='statsnumbers'>{isLiked ? initialLikes + 1:initialLikes}</span>
    <button onClick={handleIsRetweeted}><svg className={buttonClassNameret} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clip-rule="evenodd" />
    </svg>
    </button>
    <span className='statsnumbers'>{isRetweeted ? initialRetweets + 1:initialRetweets}</span>


    </div>
    </div>
    </section>
  )
}

export default TweetCard