import React, { useEffect, useState } from 'react'

const TypingArea = ({onType, isDisabled}) => {
  const [input, setInput] = useState('');
  useEffect(() => {
    if(isDisabled){
      setInput("");
    }
  }, [isDisabled]);

  const handleChange = (e) => {
    if(!isDisabled){
      setInput(e.target.value);
      onType(e.target.value);
    }
  };

  return (
    <textarea 
      onChange={handleChange}
      value={input}
      disabled={isDisabled}
      rows="10"
      cols="50"
      placeholder="Start typing..."
      className='typing-area'></textarea>
  )
}

export default TypingArea
