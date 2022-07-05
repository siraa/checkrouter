// rafce
import React from 'react';
import { useParams } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReactPlayer from 'react-player'
// import Iframe from 'react-iframe'

const MovieTrailer = ({list}) => {

console.log(list)
  const {id}=useParams()


  const movie= list.find(el=>el.id==id)
  console.log(movie)
  return (

    <div >
    
          <h1>Description</h1>
          <p> {movie.description}</p>
         
          <ReactPlayer url={movie.trailer} />
     {/* <iframe src={movie.poster} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" /> */}
     
    </div>


  )
}

export default MovieTrailer