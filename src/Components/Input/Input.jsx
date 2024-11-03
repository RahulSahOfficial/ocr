import React from 'react'
import "../Input/Input.css";
export default function Input(props) {
    const imgUrl=props.inputImage;
  return (
    <div className='border'>
        <h2>Input Image</h2>
        <img src={imgUrl} className="input-img" alt="Input Image" />
    </div>
   
  )
}
