import React from 'react'
import ReactDOM from 'react-dom'
import Picture from './bigdiv.js'
import Titles from './titles'
import CenterButtons from "./CenterButtons"
import Maintext from "./Maintext.js"
import SocialMediaBtns from "./SocialMediaBtns.js"
import './App.css';

function App() {
  return (
   <div className="Container">
     <div className="small-container">
   <Picture/>
   <Titles/>
   <CenterButtons/>
   <Maintext/>
   <SocialMediaBtns/>
    </div>
   </div>
  );
  
}

export default App;

ReactDOM.render(<App/>, document.getElementById('root'))

