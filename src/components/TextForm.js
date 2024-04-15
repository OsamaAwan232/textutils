import React, { useState } from 'react'


const TextForm = (props) => {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to UpperCase', 'success')
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to LowerCase', 'success')
    }

    const handleClearClick = ()=>{
        let newText = ''
        setText(newText)
        props.showAlert('Text has been cleared', 'success')
    }

    const handleCopyClick = ()=>{
        let newtext = document.getElementById('Box')
         newtext.select()
         navigator.clipboard.writeText(newtext.value);
         props.showAlert('Copy Text to Clipboard', 'success')
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
                <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==="dark" ? 'black' : 'white' , color: props.mode==="dark" ? 'white' : 'black'  }} id="Box" rows="8"></textarea>
            </div>
            <button disabled={text.length ===0} className="btn btn-danger mx-2 my-1" onClick={handleUpClick}>ToUpperCase</button>
            <button disabled={text.length ===0} className="btn btn-danger mx-2 my-1" onClick={handleLoClick}>ToLowerCase</button>
            <button disabled={text.length ===0} className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length ===0} className="btn btn-danger mx-2 my-1" onClick={handleCopyClick}>Copy Text</button>
        </div>
        <div className="container" style={{color: props.mode==="dark" ? 'white' : 'black' }}>
            <h1>Your text summery</h1>
            <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').filter((element)=> {return element.length !== 0}).length}Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    
    )
}

export default TextForm



