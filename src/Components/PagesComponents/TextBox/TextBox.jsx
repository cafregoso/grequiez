import React from 'react'

import './TextBox.css'

export default function TextBox({ text1, text2, color, colorletter }) {
  return (
    <div className='text-box' style={{ backgroundColor: color }}>
      <p className='text-box_p' style={{ color: colorletter }}>{ text1 }</p>
      <p className='text-box_p' style={{ color: colorletter }}>{ text2 }</p>
      <hr className='text-box_hr' />
    </div>
  )
}
