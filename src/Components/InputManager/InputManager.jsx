import React, { useState } from 'react';
import Camera from './InputsTypes/CameraInput/CameraInput';
import Handwritten from './InputsTypes/Handwritten/Handwritten';
import ImageUpload from './InputsTypes/ImageUpload/ImageUpload';
import "../InputManager/InputManager.css";

export default function InputManager(props) {
    const setInputImage=props.onChangeInput;
    const [inputType,setInputType] = useState("Handwritten");
    return (
        <div className='border'>
        <div className="top-line">
            <button onClick={()=>setInputType("Handwritten")} className={(inputType==="Handwritten")&&"active"} >Handwritten</button>
            <button onClick={()=>setInputType("Camera")} className={(inputType==="Camera")&&"active"} >Camera</button>
            <button onClick={()=>setInputType("ImageUpload")} className={(inputType==="ImageUpload")&&"active"} >Image Uplaod</button>
        </div>
        {(inputType==="Handwritten") && <Handwritten onChangeInput={setInputImage} />}
        {(inputType==="Camera") && <Camera onChangeInput={setInputImage} />}
        {(inputType==="ImageUpload") && <ImageUpload onChangeInput={setInputImage} />}
      </div>
    )
}




