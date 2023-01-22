import React from 'react'
import '../components/box.css';
export default function Box({value,onClick}) {
  const style= value === 'X' ? 'box X' : 'box O';
  return (
    <button className={style} onClick={onClick}>{value}</button>
  )
}
