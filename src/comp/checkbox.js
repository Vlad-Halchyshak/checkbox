import { useState } from 'react'

export const Checkbox = ({ onChange }) => {
  return (
    <div>
      <input type="checkbox" onChange={onChange} />
    </div>
  )
}
