import React, { useDebugValue, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UseDispatch, useDispatch } from 'react-redux';
import { getImages } from '../store/PersonalInfoSlice';

function Step2() {
  const [imageName, setImageName] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () =>{
        navigate("/step3")
    }

    const handleimage = (e) =>{
      setImageName({[e.target.name]:e.target.files[0].name})    
    }   
    dispatch(getImages(imageName))


  return (
    <div>
      <label>Upload your photo? </label>
      <input type='file' name="img" onChange={(e)=>handleimage(e)}></input><br/>
      <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default Step2
