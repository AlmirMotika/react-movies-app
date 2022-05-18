import React from 'react'
import {Link} from 'react-router-dom'
import HeroSlide from '../Components/hero-slide/Heroslide'
import { OutlineButton } from '../Components/button/Button'
import{category,movieType,tvType} from '../api/tmdbApi'
import MovieList from '../Components/movie-list/MovieList'

const Home = () => {
  return (
    <>
    <HeroSlide/>
    <div className="container">
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Trending movies</h2>
          <Link to="/movie">
            <OutlineButton className="small">View more</OutlineButton>
          </Link>
        </div>
    <MovieList category={category.movie} type={movieType.popular}/>
      </div>

      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Trending movies</h2>
          <Link to="/movie">
            <OutlineButton className="small">View more</OutlineButton>
          </Link>
        </div>
    
      </div>

      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Trending movies</h2>
          <Link to="/movie">
            <OutlineButton className="small">View more</OutlineButton>
          </Link>
        </div>
    
      </div>

      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Trending movies</h2>
          <Link to="/movie">
            <OutlineButton className="small">View more</OutlineButton>
          </Link>
        </div>
    
      </div>
    </div>
    </>
  )
}

export default Home
