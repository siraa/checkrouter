import React from 'react'
import {useNavigate} from 'react-router-dom'
const Checkpoints = () => {
const navigate=useNavigate()
const goWorkshops=()=>{
    navigate(-1)
}
  return (
    <div>Checkpoints
        <button onClick={goWorkshops }>go to workshops</button>
    </div>
  )
}

export default Checkpoints