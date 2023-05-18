import React from 'react'
import './thought-card.css'
export default function ThoughtCard({thought}) {
  return (
    <div className='thought-card'>
        <h3>{thought.title}</h3>
        <div>
            By {thought.author} | {thought.tag} | {thought.time}
        </div>
        <p>
            {thought.content}
        </p>
    </div>
  )
}
