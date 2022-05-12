import React from 'react'

export default function TextBox({ text, color }) {
  return (
    <div style={{ 
        backgroundColor: { color },

    }}>
        { text }
    </div>
  )
}
