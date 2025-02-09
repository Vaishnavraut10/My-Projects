// import React from 'react'
import React, { useState } from 'react'

export default function Textform(props) {

    const Handleupclick = () => {
        console.log("Upper case was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const Handleloclick = () => {
        console.log("Upper case was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const Handleonchange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
    const HandleClearClick = ()=>{
        let newtext = ''
        setText(newtext)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
      }
      const HandleExtraSpace =()=>{
        let newtext = text.split(/[  ]+/);
        setText(newtext.join(" "))
      }
    const [text, setText] = useState('Enter text here');
    // setText("Enter here")
    return (
        <>
            <div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>
                <h2>{props.heading }</h2>
                <div className="mb-3"  >
                    <label for="exampleFormControlTextarea1" class="form-label"></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="15" value={text} onChange={Handleonchange} style={{backgroundColor: props.mode === 'dark'?'grey':'light',color : props.mode === 'dark'?'white':'light'}} ></textarea>
                    <button className=' btn btn-success my-3'  onClick={Handleupclick}>Convert to Uppercase</button>
                    <button className=' btn btn-success mx-3'  onClick={Handleloclick}>Convert to Lowercase</button>
                    <button className=' btn btn-success mx-3'  onClick={HandleClearClick}>Clear Text</button>
                    <button className=' btn btn-success mx-3'  onClick={handleCopy}>Copy text</button>
                    <button className=' btn btn-success mx-3'  onClick={HandleExtraSpace}>Remove Space</button>

                </div>
                <div className="container my-3">
                    <h2>Your text Summary</h2>
                    <p>{text.split(" ").length} Words  {text.length}</p>
                    <p>{0.008*text.split(" ").length} Minutes</p>
                    <h2>Preview</h2>
                    {/* <p>{text}</p> */}
                    <p>{text.length>0?text:'Enter something'}</p>
                </div>
            </div>
        </>
    )
}
