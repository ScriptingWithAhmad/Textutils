// import React, { useState } from 'react'
import React from 'react'

export default function About(props) {
    // const [ myStyle, setMyStyle ] = useState({
    //     backgroundColor: 'white',
    //     color: 'black'

    // })
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
//     const [btntext,setBtnText]= useState('Dark Mode')
//    let darkMode = () => {
//         if (myStyle.color === 'black') {
//             setMyStyle({

//                 color: 'white',
//                 backgroundColor: 'black'
//             }
//             )
//             setBtnText('Light Mode')
//         }
//         else{
//             setMyStyle({

//                 color: 'black',
//                 backgroundColor: 'white',
//                 border: '1px solid white'
//             }
//             )
//             setBtnText('Dark Mode')
//         }
//     }


    return (
        <div className='container my-5' style={myStyle} >
            <h2>About US</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>First item</strong> <p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Second item</strong> 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Third item</strong> 
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">

                <button type="button" onClick={darkMode} className="btn btn-warning">{btntext}</button>
            </div> */}

        </div>
    )
}
