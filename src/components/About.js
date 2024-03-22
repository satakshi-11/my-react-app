import React from 'react'
import { useState } from 'react'
export default function About(props) {
    // const [mystyle,setMystyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const [btntxt,setBtnTxt]=useState('Enable dark mode')
    // const toggleMode=()=>{
    //     if(mystyle.color==='black'){
    //         setMystyle(
    //             {
    //                 color:'white',
    //                 backgroundColor:'black'
    //             }
    //         )  
    //         setBtnTxt('Enable light mode')            
    //     }
    //     else
    //     {
    //         setMystyle(
    //             {
    //                 color:'black',
    //                 backgroundColor:'white'
    //             }
    //         )
    //         setBtnTxt('Enable Dark Mode')
    //     }
    // }
    let mystyle={
      color:props.mode==='dark'?'white':'black',
      backgroundColor : props.mode==='dark'?'#191970':'white'
    }
  return (
    <div className="container" style={mystyle}>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header"style={mystyle}>
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Free to use
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
             Textutils is free to use 
            </div>
            </div>
            </div>
            <div className="accordion-item"style={mystyle}>
            <h2 className="accordion-header"style={mystyle}>
            <button className="accordion-button collapsed"style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Text editor
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Analyse your text with this
            </div>
            </div>
  </div>
  <div className="accordion-item"style={mystyle}>
    <h2 className="accordion-header"style={mystyle}>
      <button className="accordion-button collapsed"style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        It is Browser compatible.
      </div>
    </div>
  </div>
</div>
<div className="container">
{/* <button type="button" className="btn btn-primary" onClick={toggleMode}>{btntxt}</button> */}
</div>
    </div>
    
  )
}
