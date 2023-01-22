import React from 'react'
import './ResetBtn.css';
export default function ResectBtn({reset}) {
  return (
    <div>
        <button className='reset-btn' onClick={reset}>Reset</button>
    </div>
  )
}
