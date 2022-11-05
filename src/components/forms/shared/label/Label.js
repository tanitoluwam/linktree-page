import React from 'react'

export const Label = ({ name, id, extraClass }) => {
  return (
    <label htmlFor={id} className={`text-gray-700 block ${extraClass}`}>
    {name}
  </label>
  )
}
