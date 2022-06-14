import React from 'react'
import ReactDom from 'react-dom'
import image from './Greg.JPG'
import './App.css'

function Picture(){
    return(
        <div>
            <img id="greg"src={image}/>
        </div>
    )
}


export default Picture

