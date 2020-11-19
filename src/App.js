import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import {Checkbox} from './comp/checkbox'


function App() {

  const [firstState, setFirstState] = useState([
    { id: 1, text: 'first text',  active: false },
    { id: 2, text: 'second text', active: false },
    { id: 3, text: 'third text',  active: false },
  ])
  const [select, setSelect] = useState(false)
  

   const deleteSelected = () => {
     //здесь делаешь Filter    
     const list = firstState.filter(checkbox => checkbox.checked !== true)
  }

  const handleClick = checkbox => {
//здесь поменять галочку на противоположное значение
    checkbox.checked = !checked {
      setList(...list, checkbox)
    }
  }
        
    
   
  
  return (
    <div>
      {firstState.map((i) => (
        <ul key={i.id}>
          <li>
            <Checkbox 
              state={firstState}
              
              setSelected={setSelect}/>
            {i.text}
          </li>
        </ul>
      ))}
      <button
        onClick={removeSelected }
        style={{ margin: 30 }}>delete selected</button>
    </div>
  )
}

export default App;
