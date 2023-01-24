import React from 'react'
import './scoreboard.css';
  export default function Scoreboard({scores,xPlaying}) {
   const {xScore,oScore} = scores;
   console.log(xScore,oScore)
    
  return (
    <div className='scoreboard'>
        <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore} </span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>
  )
}
