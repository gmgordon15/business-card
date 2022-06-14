import { render } from '@testing-library/react';
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';

function App() {
  return (
   <div><h1>Hello</h1></div>
  );
  
}

export default App;

ReactDOM.render(<App/>, document.getElementById('root'))

