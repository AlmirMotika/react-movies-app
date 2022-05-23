import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import './detail.scss'
import CastList from './CastList';

const Detail = () => {
  const {category,id}=useParams();
  const [item,setItem]=useState(null);

  useEffect(()=>{
    const getDetail=async ()=>{
      const response=await tmdbApi.detail(category,id,{params:{}});
      setItem(response);
      window.scrollTo(0,0);
    }
    getDetail();
  },[category,id]);
  return (
    <>
    {
      item && (
      <>
        <div className="banner" style={{backgroundImage:`url(${apiConfig.originalImage(item.backdroph_path || item.poster_path)})`}}></div>
        <div className="mb-3 movie-content container">
        <div className="movie-content__poster">
          <div className="movie-content__poster__img" style={{backgroundImage:`url(${apiConfig.originalImage(item.poster_path || item.backdroph_path)})`}}></div>
        </div>
        <div className="movie-content__info">
          <h1 className="title">
            {item.title || item.name}
          </h1>
          <div className="genres">
            {
              item.genres && item.genres.slice(0,5).map((genre,i)=>(
                <span key={i} className="genres_item">{genre.name}</span>
              ))
            }
          </div>
          <p className="overview">{item.overview}</p>
          <div className="cast">
            <div className="section_header">
              <h2>Casts</h2>
            </div>
            <CastList id={item.id}/>
          </div>
        </div>
        </div>
        
        <div className="container__videos__movies"></div>
      </>
      )

    }
    
    </>
  );
}

export default Detail
