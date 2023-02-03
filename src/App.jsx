import './App.css'
import { useState} from 'react';
import TwitterFollowCard from './components/TwitterFollowCard.jsx'
import TwitterTrendCard from './components/TwitterTrendCard.jsx'
import TweetCard from './components/TweetCard.jsx'
import {trends} from './data'
import {users} from './data'
import {tweetsdatabase} from './data'

const App = () => {

  const [ tweets, setTweets] = useState(tweetsdatabase)  

  const [ newTweet, setNewTweet] = useState('')

    const handleNewTweet = (event) => {
        setNewTweet(event.target.value)
      }

    const uploadTweet = (event) => {
        event.preventDefault()
        const tweetObject = {
        name:"You",
        userName:"yourself",
        tweet:`${newTweet}`,
        retweets:0,
        isRetweeted: false,
        likes:0,
        isLiked: false,
}
    
      tweetObject.tweet != "" ? setTweets(tweets.concat(tweetObject)) : window.alert("Type Something!")
      setNewTweet('')
    }

  return (
    <div className="App">
      <div className='navbar'>
       <div className='twitterlogodiv'>
       <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
       </div>
       <div className='houselogodiv'>
       <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 16 16" fill="#000000" class="bi bi-house-door"><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/></svg>
       </div>
      </div>
      <div className='tl'>
        <div className='inicio'>
          <span>Inicio</span>
          <span className='fy'>For you</span>
        </div>
        <div className='owntweet'>
        <form onSubmit={uploadTweet}>
        <input value={newTweet} onChange={handleNewTweet}>
        </input>
        <button className ="uploadtweet" type="submit">Tweet</button>
        </form>
        </div>
        {
        tweets.map(({ name, userName, tweet, retweets, likes, isRetweeted, isLiked }) => (

          <TweetCard  name={name} username = {userName} tweet={tweet} initialRetweets={retweets} initialLikes={likes} initialIsRetweteed={isRetweeted} initialIsLiked={isLiked} />
          
        ))
        }
      </div>
      <div className='extra'>
        <div className='QueEstaPasando'>
         <p className="QueEstaPasandoTexto">Qué está pasando</p>
          {
            trends.map(({ trend, numberoftweets, theme }) => (

             <TwitterTrendCard trend={trend} numberoftweets={numberoftweets} theme={theme} />
          
            ))
          }
        </div>
        <div className='AQuienSeguir'>
          <p className='AQuienSeguirTexto'>A quien seguir</p>
          {
             users.map(({ name, userName, isFollowing }) => (

             <TwitterFollowCard  name={name} username = {userName} initialIsFollowing={isFollowing} />
          
             ))
          }
        </div>
      </div>
    </div>
    
  )
}

export default App

