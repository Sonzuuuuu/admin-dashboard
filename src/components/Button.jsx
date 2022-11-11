import React from 'react'

const Button = ({ bgColor, color, size, text, 
  borderRadius, currentColor}) => {
  return (
    <button
    type="button"
    style={{ backgroundColor: bgColor, color, 
    borderRadius, currentColor }}
    className={`text-${size} p-3
    hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button