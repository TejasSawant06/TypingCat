import React, { useEffect } from 'react'
import { FaRegClock } from 'react-icons/fa'

const Timer = ({timeLeft, onTimeUp}) => {
  useEffect(() => {
    if(timeLeft > 0){
      const timer = setTimeout(() => onTimeUp(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, onTimeUp]);

  return (
    <div className='flex gap-2 items-center font-medium'>
      <FaRegClock/>
      <p className='text-red-700'>Time Left: {timeLeft}s</p>
    </div>
  )
}

export default Timer
