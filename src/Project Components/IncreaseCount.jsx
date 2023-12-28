import React, { useState } from 'react'

const IncreaseCount = () => {
  
  const [counter, setCounter] = useState(0)
  return (
    <div>
        <p>
            {counter}
        </p>
        <button onClick={()=> {
            setCounter(counter + 1);
        }}>Increase Counter</button>
    </div>
  )
}

export default IncreaseCount