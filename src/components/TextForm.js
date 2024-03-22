import React, { useState } from 'react';


export default function TextForm(props) {
  // eslint-disable-next-line
  const handleLowClick=()=>{
    
    let newtext=text.toLowerCase();
    setText(newtext);
    // eslint-disable-next-line
   { props.showAlert(' Converted to Lowercase','success')};
  }
  // eslint-disable-next-line
  const clear=()=>{
    let newtext="";
    setText(newtext);
    // eslint-disable-next-line
    { props.showAlert(' Cleared workspace','success')}; 
  }
  // eslint-disable-next-line
  const removespace=()=>{
    let newtext=text.replace(/\s+/g," ");
    setText(newtext);
    // eslint-disable-next-line
    { props.showAlert(' Removed spaces','success')};
  }

    const handleUpClick=()=>{
    
        let newtext=text.toUpperCase();
        setText(newtext);
        // eslint-disable-next-line
        { props.showAlert(' Converted to Uppercase','success')};
    }
    const handleonchange=(event)=>{
       
        setText(event.target.value)
    }
    const [text,setText]=useState('Enter Text Here')
  return (
    <>
<div style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
   <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#000435':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-2 my-2" onClick={clear}>Clear Text</button>
       <button className="btn btn-primary mx-2 my-2" onClick={removespace}>Remove Extra Spaces</button>
</div>
   <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Text Summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
   </div>
</>
  )
}
