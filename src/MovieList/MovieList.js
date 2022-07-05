import React from 'react'
import "./MovieList.css";
import MovieCard from '../MovieCard/MovieCard';
// import CardDeck from 'react-bootstrap/CardDeck'
// import MovieTrailer from'./MovieDesctrai/MovieTrailer';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from 'react-router-dom'

const {id} =useParams ;
const MovieList = ({listm}) =>{

    return(
     <div  className="Movielist">
      


      {/* {listm.map(el=><div><MovieCard movie={el}/></div>)} */}
       {listm.map((card, key) => (
        // <Link to={`${card.description}`}>
        
        // <Link to={`/MovieDesctrai/MovieTrailer>
        // <Link to="/MovieDesctrai/MovieTrailer"> 
        <MovieCard card={card} key={key.id}/>
        // </Link>
        ))}
     
     </div>   
    //  <div>  {listm.map((el,key)=><div><MovieCard key={key} card={el}/></div>)}</div>
    // <div>  {listm.map((card,key)=><div><MovieCard card={card} key={key}/></div>)}</div>
         
      
       
    );
}

export default  MovieList;