import React,{useState} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './MovieSearch.css'


const Search = ({searchMovie,setRate,newRate}) => {
  
    const movie = e =>{
        searchMovie(e.target.value);
        }


        const [rating,setRating]=useState(1);

    const  onStarClick=(nextValue, prevValue, name)=> {
        setRate(nextValue);
          }


    return (
    
        
        <form>
        <div >
            <input type="text" placeholder="Search for a movie..." 
         onChange={movie}>
            
            </input>
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newRate}
          onStarClick={onStarClick}
        />

            
        </div>
    </form>
        
    )
}

export default Search