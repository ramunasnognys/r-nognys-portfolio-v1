'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import Char from './Char'
import { ASCII_CHARS } from '../constants/ascii'

const ASCIIBackground: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { isDark } = useTheme()
  const [chars, setChars] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', updateDimensions)
    updateDimensions()

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    const generateChars = () => {
      const newChars: React.ReactNode[] = []
      const gridSize = 20 // Grid size
      const cols = Math.ceil(dimensions.width / gridSize)
      const rows = Math.ceil(dimensions.height / gridSize)

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Introduce randomness in character placement
          if (Math.random() > 0.3) { // 70% chance of placing a character
            const char = ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)]
            const x = col * gridSize
            const y = row * gridSize
            const size = Math.random() * 3 + 14 // Smaller size range
            const id = `char-${row}-${col}`

            newChars.push(
              <Char
                key={id}
                id={id}
                char={char}
                x={x}
                y={y}
                size={size}
              />
            )
          }
        }
      }

      setChars(newChars)
    }

    generateChars()
  }, [dimensions])

  useEffect(() => {
    let hoveredChars: string[] = []

    const autoHover = () => {
      hoveredChars.forEach(id => {
        const element = document.getElementById(id)
        if (element) {
          element.dispatchEvent(new Event('autohoverclear'))
        }
      })
      hoveredChars = []

      const charElements = document.querySelectorAll('[id^="char-"]')
      const charCount = charElements.length
      const hoverCount = Math.min(20, charCount) // Increased number of hovered chars

      for (let i = 0; i < hoverCount; i++) {
        const randomIndex = Math.floor(Math.random() * charCount)
        const element = charElements[randomIndex] as HTMLElement
        if (element && !hoveredChars.includes(element.id)) {
          element.dispatchEvent(new Event('autohover'))
          hoveredChars.push(element.id)
        }
      }
    }

    // In the ASCIIBackground component, update the interval:
  const intervalId = setInterval(autoHover, 800) // Increased to 300ms for more noticeable transitions

    return () => clearInterval(intervalId)
  }, [chars])

  return (
    <div className={`fixed inset-0 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
        style={{ minHeight: '100vh', minWidth: '100vw', position: 'fixed', cursor: 'default' }}
      >
        {chars}
      </svg>
    </div>
  )
}

export default ASCIIBackground