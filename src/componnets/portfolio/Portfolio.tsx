import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio_item'>
          <div className="portfolio__item-image">
            <h3>This is portfolio item title</h3>
            <a href="https://github.com/anx450z" target='_blank'>Github</a>
            <a href="#" target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio