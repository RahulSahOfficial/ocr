import { useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import "../Handwritten/Handwritten.css";

export default function Handwritten(props) {
    const setInputImage=props.onChangeInput;
    const canvasRef = useRef(null);
    return (
    <>
        <CanvasDraw ref={canvasRef} />
        <div className="buttons">
            <button onClick={()=>{
                const dataURL = canvasRef.current.getDataURL("image/png", false, "#ffffff");
                setInputImage(dataURL);
            }} className="green">Predict</button>
            <button  onClick={()=>canvasRef.current.clear()} className="red">Clear</button>
        </div>
    </>
  )
}
