import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("the uppercase button was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("The text has been converted into uppercase", "success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("The text has been converted into lowercase", "success")
    }
    const handleClearClick = () => {
        setText('');
        props.showAlert("The text has been cleared", "success")
    }
  
    const handleOnChange = (event) => {
        // console.log("onChange");
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    // setText("yaha likh bhai") correct way to change the state
    // text = "safd"; wrong way to change the state
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === "dark" ? "#000e20" : "white", color:props.mode === "dark" ? "white" : "black"}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    convert to uppercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>
                    convert to lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>
                    clear text
                </button>
                {/* <button className="btn btn-primary mx-1" onClick={handleItalicClick}>
                    convert to Itallic text
                </button> */}
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.length>0 ? text.trim().split(" ").length : 0} words and {text.length} characters</p>
                <p>{text.split(" ").length * 0.008} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter your text to preview"}</p>
            </div>
        </>
    )
}
