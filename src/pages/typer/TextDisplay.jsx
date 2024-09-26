import React from 'react'

const TextDisplay = ({text, currentIndex}) => {
  return (
    <div>
      {
        text.split('').map((char, index) => (
          <span key={index} className={index < currentIndex ? 'correct' : ''}>{char}</span>
        ))
      }
    </div>
  )
}

export default TextDisplay
