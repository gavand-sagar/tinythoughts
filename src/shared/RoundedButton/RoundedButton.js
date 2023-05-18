import React from 'react'
import './rouded-button.css'
export default function RoundedButton({onClick,children}) {
  return (
    <button className='rouded-button' onClick={onClick}>{children}</button>
  )
}
