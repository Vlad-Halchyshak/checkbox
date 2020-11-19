import { useState } from "react"



export const Checkbox = ({ state, handleChange, selected, setSelected}) => {
  
  console.log(selected)
  
  return (
    <div>
      <input type="checkbox"
        check={selected}
        onChange={() => setSelected(!selected)}   />
      
    </div>
  )
}
