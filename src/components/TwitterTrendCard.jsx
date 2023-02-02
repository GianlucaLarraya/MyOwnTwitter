import './TwitterTrendCard.css'

const TwitterTrendCard = ({trend,numberoftweets,theme}) =>  {

  return (
    <div>
    <section className="sectiontrends">
    <span className="theme">{theme}</span>
    <span className="trend">{trend}</span>
    <span className="theme">{numberoftweets}</span>
    </section>
    </div>
  )
}

export default TwitterTrendCard