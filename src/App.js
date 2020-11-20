import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import {Checkbox} from './comp/checkbox'


function App() {

  const [firstState, setFirstState] = useState([
    { id: 1, text: 'first text',  checked: false },
    { id: 2, text: 'second text', checked: false },
    { id: 3, text: 'third text',  checked: false },
  ])
  
    const removeSelected = () => {
      const filteredList = firstState.filter((i) => i.active !== true)
      setFirstState(filteredList)
    }

    const handleCheckboxClick = (checkbox) => {
      const updatedList = firstState.map((item) => {
        if (item.id === checkbox.id) {
          return { ...item, active: !item.active }
        }
        return item
      })
      setFirstState(updatedList)
    }
   console.log(handleCheckboxClick)
  
  return (
    <div>
      {firstState.map((i) => (
        <ul key={i.id}>
          <li>
            <Checkbox
              checked={i.active === true}
              onChange={() => handleCheckboxClick(i)}
              />
            {i.text}
          </li>
        </ul>
      ))}
      <button onClick={removeSelected} style={{ margin: 30 }}>
        delete selected
      </button>
    </div>
  )
}

export default App;
