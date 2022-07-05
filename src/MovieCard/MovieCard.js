import React from 'react';
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './MovieCard.css'

import CardGroup from 'react-bootstrap/CardGroup';
// import StarRatingComponent from 'react-star-rating-component';
import StarRatingComponent from 'react-star-rating-component';

// export default function MovieCard({movie})
 const MovieCard = ({card,list}) =>{
    
    return (
        // style={{boxShadow: "6px 6px 6px grey"}}
<div  >


<CardGroup style={{boxShadow: "6px 6px 6px grey"}}>
            <Card className="MovieCard">
                <Card.Img className="img" style={{objectFit:"cover"}} src={card.poster} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                
                 {/* <Link to={`${card.description}`}>  
                    </Link> */}
                      <Link to={`/MovieTrailer/description/${card.id}`}> {card.description}</Link>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <StarRatingComponent 
          name="rate" 
          starCount={5}
          value={card.rate}
          emptyStarColor={"black"}
          editing={true}
        /></small>
                </Card.Footer>
            </Card>
    
        </CardGroup>

{/* <h3>{card.title}</h3>
<img style={{objectFit:"cover"}} src={card.poster}/>
<p>{card.description}</p>
<span>{card.rate}</span>
<div><StarRatingComponent 
          name="rate" 
          starCount={5}
          value={card.rate}
          emptyStarColor={"black"}
          editing={true}
        />
        </div> */}


</div>

        
    )
}
export default MovieCard ;