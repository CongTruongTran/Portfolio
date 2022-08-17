import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio1.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Shopee',
    github: 'https://github.com/CongTruongTran/ShopeePhake',
    demo: 'https://congtruongtran.github.io/ShopeePhake/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'The Band',
    github: 'https://github.com/CongTruongTran/W3-Band',
    demo: 'https://congtruongtran.github.io/W3-Band/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Login Form',
    github: 'https://github.com/CongTruongTran/LoginPage',
    demo: 'https://congtruongtran.github.io/LoginPage/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target={'_blank'}>Github</a>
                  <a href={demo} className='btn btn-primary' target={'_blank'}>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    
    </section>
  )
}

export default Portfolio