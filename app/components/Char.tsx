import React, { useEffect, useState, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

interface CharProps {
  char: string
  x: number
  y: number
  size: number
  id: string
}

const Char: React.FC<CharProps> = ({ char, x, y, size, id }) => {
  const { isDark } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [opacity, setOpacity] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsHovered(true)
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    // Keep the character visible for a short duration after mouse leaves
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false)
      setOpacity(1)
    }, 500) // Adjust the duration as needed
  }

  const lightColor = "rgba(0, 0, 0, 0.2)"
  const darkColor = "rgba(0, 0, 0, 0.08)" 
  const lightHoverColor = "rgba(255, 0, 0, 0.8)"
  const darkHoverColor = "rgba(127, 127, 127, 0.8)"

  useEffect(() => {
    const element = document.getElementById(id)
    if (element) {
      element.addEventListener('autohover', handleAutoHover)
      element.addEventListener('autohoverclear', handleAutoHoverClear)
    }
    setTimeout(() => setOpacity(1), 100)
    return () => {
      if (element) {
        element.removeEventListener('autohover', handleAutoHover)
        element.removeEventListener('autohoverclear', handleAutoHoverClear)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [id])

  const handleAutoHover = () => {
    if (!isHovered) {
      setIsHovered(true)
      setOpacity(1)
    }
  }

  const handleAutoHoverClear = () => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false)
        setOpacity(1)
      }, 100)
    }
  }

  return (
    <>
      <style jsx>{`
        .char {
            transition: fill 0.3s ease, opacity 0.2s ease;

        }
      `}</style>
      <text
        id={id}
        x={x}
        y={y}
        fontSize={size}
        fill={isHovered 
          ? (isDark ? darkHoverColor : lightHoverColor)
          : (isDark ? darkColor : lightColor)
        }
        className="char"
        opacity={opacity}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {char}
      </text>
    </>
  )
}

export default Char