import { useEffect, useState } from 'react';
import './App.css';
import InputManager from '../InputManager/InputManager';
import Input from "../Input/Input";
import Output from "../Output/Output";


function App() {
    const [output,setOutput]=useState({value:"8",text:"Eight"});
    const [inputImage,setInputImage]=useState("default.png");
    
    useEffect(()=>{
        console.log("Image changes");
        // ML Logic Implement....

        //Predict using variable inputImage and pass this format to setOutput
        // setOutput({value:"7",text:"Seven"});
    },[inputImage])

    return (
        <div className="App">
            <h1><img src="logo.png" alt="Logo" />OCR (ML Project)</h1>
            <div className='layout'>
                <div className="left">
                    <InputManager onChangeInput={setInputImage} />
                </div>
                <div className="right">
                    <Input inputImage={inputImage} />
                    <Output output={output} />
                </div>
            </div>
        </div>
    );
}

export default App;
