import React, { useState } from 'react';
import Button     from 'react-bootstrap/Button';
import Form    from 'react-bootstrap/Form';
import InputGroup     from 'react-bootstrap/InputGroup';

import Modal from 'react-bootstrap/Modal';
import StarRatingComponent from 'react-star-rating-component';
import './MovieAdd.css'

const MovieAdd = ({add}) => {

 
   const [movie, setMovie] = useState({
    
      title: '',
     description: '',
      poster:'',
      rate:0
      
    
    });
    // const [smShow, setSmShow] = useState(false);
    // const [lgShow, setLgShow] = useState(false);

    const [show, setShow] = useState(false);
    const [rate,setRate]=useState(1);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 const   onStarClick=(nextValue,prevValue,name)=>{
  setMovie({...movie,rate:nextValue})


 }
 
    
    const handleChange = (e) =>
    {
      setMovie({...movie,
        [e.target.name] : e.target.value
      }
        )
    }
  return (
    <div>

<Button variant="primary"  className="add-btn" onClick={handleShow}>

     Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
   
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title"  name="title" onChange={handleChange} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description"onChange={handleChange} />
            </Form.Group>
            <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3"name="poster"   onChange={handleChange}/>
      </InputGroup>

      <StarRatingComponent 
          name="rate"
          value={movie.rate} 
          onStarClick={onStarClick}
         
        />
      
  
    </Form>
        </Modal.Body>
       
    
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
         
            Close
          </Button >
          {/* {add(movie);setMovie({title:"",poster:"",Storyline:"",year:"",rating:"",Traiter:""});setShow(false)}}> */}
          <Button variant="primary" onClick={()=>
          {add(movie);handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>




    </div>
  )






}

export default MovieAdd