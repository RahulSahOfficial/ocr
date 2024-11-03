import React,{useEffect} from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
import "../Output/Output.css";

export default function Output(props) {
    const {value,text} = props.output;
    const { speak } = useSpeechSynthesis();
    useEffect(() => {
        speak({text});
    }, [text,speak]);
    return (
        <div className='output border'>
            <h2>Output</h2>
            <p className='output-value'>{value}</p>
            <p className='output-text'>{text}</p>
        </div>
    )
}