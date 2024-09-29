'use client'

import React from 'react'
import { useTheme } from '../context/ThemeContext'

const ToggleButton: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 z-50 p-2 rounded-full transition-colors duration-200 ease-in-out
        ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}

export default ToggleButton