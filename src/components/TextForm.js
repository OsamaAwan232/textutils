import React, { useState } from 'react'


const TextForm = (props) => {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleOnchange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here')
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="Box" rows="8"></textarea>
            </div>
            <button className="btn btn-danger" onClick={handleUpClick}>ToUpperCase</button>
        </div>
    )
}

export default TextForm
