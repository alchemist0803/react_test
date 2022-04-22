import React, { useState } from "react";
import './index.css';
export default function  TextArea() {
    const [ inputText, setInputText ] = useState('');
    const [ outputText, setOutputText ] = useState('');
    const [ compare, setCompare ] = useState(false);

    const compareFunc = (first, last) => {
        if (first === last) {
            setCompare(true);
        }

        else 
            setCompare(false);
    }
    const getInputValue = (e) => {
        setInputText(e.target.value);
        compareFunc(e.target.value, outputText);
    }

    const getOutputValue = (e) => {
        setOutputText(e.target.value);
        compareFunc(inputText, e.target.value);
    }

    return ( 
        <div className="text">
            <div className="row">
                <div className="col-5">
                    <div className="textArea">
                        <div>Lengh: {inputText.length}</div>
                        <input type="text" onChange={getInputValue} />
                    </div>
                </div>
                <div className="col-2">
                    <span>Compare: {compare?'equal':'not same'}</span>
                </div>
                <div className="col-5">
                    <div className="textArea">
                        <div>Lengh: {outputText.length}</div>
                        <input type="type" onChange={getOutputValue} />
                    </div>
                </div>
            </div>
        </div>
    );
}
