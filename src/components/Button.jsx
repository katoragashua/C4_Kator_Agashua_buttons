import React from 'react'

const Button = ({label}) => {
  return (
    <div>
        <button style={{backgroundColor: label === "Login" && "orange" }}>{label}</button>
    </div>
  )
}

export default Button