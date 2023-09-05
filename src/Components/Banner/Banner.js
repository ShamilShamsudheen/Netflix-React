import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
    const [movie,setMovie] = useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            const movies = response.data.results;
            console.log(movie)
            const randomIndex = Math.floor(Math.random() * movies.length);
            const randomMovie = movies[randomIndex];
            setMovie(randomMovie);
        })
    },[])
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title' >{movie ? movie.title:''}</h1>
            <div className="banner_btn">
                <button className='btn'>play</button>
                <button className='btn'>my list</button>
            </div>
            <p className='description'>{movie ? movie.overview:''}</p>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
