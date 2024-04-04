import React, { useState } from 'react'


const TextForm = (props) => {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClearClick = ()=>{
        let newText = ''
        setText(newText)
    }

    const handleCopyClick = ()=>{
        let newtext = document.getElementById('Box')
         newtext.select()
         navigator.clipboard.writeText(newtext.value);
        }
    
    const handleOnchange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
        <div className='container' style={{color: props.mode==="dark" ? 'white' : 'black' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==="dark" ? 'grey' : 'white' , color: props.mode==="dark" ? 'white' : 'black'  }} id="Box" rows="8"></textarea>
            </div>
            <button className="btn btn-danger mx-2" onClick={handleUpClick}>ToUpperCase</button>
            <button className="btn btn-danger mx-2" onClick={handleLoClick}>ToLowerCase</button>
            <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-danger mx-2" onClick={handleCopyClick}>Copy Text</button>
        </div>
        <div className="container" style={{color: props.mode==="dark" ? 'white' : 'black' }}>
            <h1>Your text summery</h1>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.slice(' ').length}Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the text box to Preview it here"}</p>
        </div>
        </>
    
    )
}

export default TextForm



