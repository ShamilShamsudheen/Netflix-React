import React,{useState,useEffect} from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/Constants'
import './RowPost.css'

function RowPost(props) {
    const [movies,setMovies] = useState([]);
    const [urlId,setUrlId] = useState('')
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            console.log(response.data)  
            setMovies(response.data.results);
        })
    },[props.url])
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    const HandleTrailor = (id)=>{
      console.log(id)
      
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
          if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
          }else{
            console.log('array empty')
          }
        })
      
    }
  return (
    <div className='row' >
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie)=>
        <img onClick={()=>HandleTrailor(movie.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="Poster" />

        )}
      </div>
      {urlId && <Youtube opts = {opts} videoId={urlId.key}  />}
    </div>
  )
}

export default RowPost
