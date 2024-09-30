# tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

# tailwind.config.ts

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;

```

# README.md

```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

<<<<<<< Updated upstream
# Ramas Cook's Portfolio v3
=======
# Ramas Cook's Portfolio v2
>>>>>>> Stashed changes
## Getting Started
First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# my-portfolio

```

# postcss.config.mjs

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```

# package.json

```json
{
  "name": "my-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.13",
    "react": "^18",
    "react-dom": "^18",
    "@vercel/font": "^1.0.2"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18.3.8",
    "@types/react-dom": "^18.3.0",
    "eslint": "^8",
    "eslint-config-next": "14.2.13",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5",
    "@vercel/font": "^1.0.2"
  }
}

```

# next.config.mjs

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.

```

# components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

# .eslintrc.json

```json
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}

```

# lib\utils.ts

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

# app\page.tsx

```tsx
import Profile from './components/profile'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ramunas Nognys - Offshore Scaffolder and Rigger',
  description: 'Ramunas Nognys - Experienced offshore scaffolder and rigger with a decade of experience in the oil & gas and renewable energy sectors.',
}

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <div className="profile-container absolute inset-0 z-10 pointer-events-auto">
        {/* <Profile /> */}
      </div>
    </main>
  )
}

```

# app\layout.tsx

```tsx
import type { Metadata } from 'next'
import { ThemeProvider } from './context/ThemeContext'
import ASCIIBackground from './components/ASCIIBackground'
import Profile from './components/profile'


import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';


export const metadata: Metadata = {
  title: 'ASCII Background App',
  description: 'An interactive ASCII background with theme toggle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body>
        <ThemeProvider>
        <Profile />
        <ASCIIBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

# app\globals.css

```css
/* Base Styles */
* {
  margin: 0; /* Reset margin for all elements */
  padding: 0; /* Reset padding for all elements */
}


body {
  color: var(--foreground);
  background: var(--background); /* Ensure this is set correctly */
  line-height: 1.6;
  padding: 0; /* Removed padding to allow background to take full screen */
  font-size: 1rem; /* Set base font size */
  text-transform: lowercase;
  /* -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; */
  text-align: left; /* Align text to the left */
}

/* Set all headings and paragraphs to have the same font size */
h1, h2, h3, h4, h5, h6, p {
  font-size: 1rem; /* Set to 1.2rem */
  font-weight: normal; /* Optional: adjust weight if needed */
  margin: .5rem; /* Optional: reset margin */
  padding: 0;
  max-width: 70ch; /* Set max width to 70 characters */
  text-align: left; /* Align text to the left */
  line-height: 1.5; /* Adjust line height for better spacing */
}

a {
  text-decoration: underline; /* Added underline to all links */
  color: inherit;
  outline: none;
}

/* Container */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem; /* Added padding for consistent text indentation */
  margin-left: 1rem;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  background: var(--background); /* Add this line */
}

.profile-container {
  max-width: 70ch; /* Set max width to 70 characters */
  padding-left: 4rem;
  padding-top: 3rem;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  background-color: transparent;

}

/* Header Styles */
h1 {
  margin-bottom: .3rem;
  line-height: 0; /* Set line-height to 0 for header element children */
  margin-bottom: 1rem; /* Added margin for spacing between h1 and span */
}

h1,p > * {
  line-height: 0; /* Apply line-height of 0 to all direct children of h1 */
  padding: 0;
}

.location {
  color: #666; /* Subtle gray to differentiate */
  margin-bottom: 2rem;
  
}

/* Section Styles */
section {
  margin-bottom: 2rem; /* Set gap between sections to 2rem */
  margin-left: 0;
}

section p {
  margin-bottom: 0; /* Remove margin below paragraphs to avoid extra spacing */
  padding: 0;

}

section h2 {
  font-weight: normal; /* Changed from bold to normal */
  margin:0; /* Remove margin below h2 to eliminate gap with p */
}

section p {
  margin-top: 0; /* Remove margin above p to eliminate gap with h2 */
  padding: 0;
  margin-left: 0;
}

header {
  line-height: 0.5rem; /* Set line-height to 0.5rem for children spacing */
  margin: 0;
  margin-bottom: 4.5rem;
}

header p, h1 {
  padding: 0;
  margin-left: 0;
}

h2 {
  font-weight: normal; /* Changed from bold to normal */
  margin-top: 2rem;
  margin-bottom: 1rem;
  line-height: 1.4; /* Increase line height for better readability */
}

p {
  margin-bottom: 1rem; /* Add margin to paragraphs */
  line-height: 1.6; /* Increase line height for better readability */
}

/* Remove indentation from lists */
ul, ol {
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
}

/* Link Styles */
.links ul {
  list-style: none; /* Remove list style */
  padding: 0; /* Ensure no padding for links list */
}

.links li {
  margin: 0; /* Remove margin */
  font-size: 1rem; /* Set to 1rem for consistency */
  list-style: none; /* Ensure no list style */
}

.links a {
  color: inherit; /* Remove link color styling */
  text-decoration: none; /* Remove underline */
  display: block; /* Keep block display */
  margin-bottom: 0; /* Remove margin */
  
}

/* Work Experience List Item Styles */
ul li {
  font-size: 1rem; /* Set to 1.2rem for consistency */
  color: #333; /* Ensure color consistency */
  list-style: none;
}

/* Additional Styling for Minimal Look */
.profile {
  padding: 0; /* Remove padding in the profile */
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); /* Subtle shadow for depth */
  
}

/* Main Element Spacing */
main {
  padding: 0; /* Remove padding from main */
  background: transparent;
  position: relative;
  z-index: 1;
}

/* Style for the background ASCII art */
.background-ascii {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  color: #f0f0f0; /* Light gray color for the ASCII characters */
}

/* Add this to your globals.css */
.selectable {
  
  -webkit-user-select: text; /* Allow text selection */
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

/* In your global CSS file */
::selection {
  
  background-color: red;
  color: blue;
}

.text-content {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 0.5rem;
  border-radius: 0.25rem;
}
```

# app\favicon.ico

This is a binary file of the type: Binary

# .vscode\settings.json

```json
{
  "css.customData": [".vscode/css_custom_data.json"],
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false,
  "stylelint.enable": true
}
```

# .vscode\css_custom_data.json

```json
{
  "atDirectives": [
    {
      "name": "@tailwind",
      "description": "Use the @tailwind directive to insert Tailwind's `base`, `components`, `utilities` and `screens` styles into your CSS.",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#tailwind"
        }
      ]
    },
    {
      "name": "@apply",
      "description": "Use @apply to inline any existing utility classes into your own custom CSS.",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#apply"
        }
      ]
    },
    {
      "name": "@layer",
      "description": "Use the @layer directive to tell Tailwind which 'bucket' a set of custom styles belong to.",
      "references": [
        {
          "name": "Tailwind Documentation",
          "url": "https://tailwindcss.com/docs/functions-and-directives#layer"
        }
      ]
    }
  ]
}
```

# app\lib\utils.ts

```ts

```

# app\fonts\GeistVF.woff

This is a binary file of the type: Binary

# app\fonts\GeistMonoVF.woff

This is a binary file of the type: Binary

# app\context\ThemeContext.tsx

```tsx
'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
```

# app\constants\ascii.ts

```ts
// export const ASCII_CHARS = '@#%$/*X0ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg#ijklmnopqrstuvwxyz0123456789+-=<>[](){}|:;,.?!'

export const ASCII_CHARS = '@#%$&/\\*X0^_`~|[]{}()<>+=-_:;.,?!010101010101' 

```

# app\components\ToggleButton.tsx

```tsx
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
```

# app\components\profile.tsx

```tsx
import Link from 'next/link'
import React from 'react'; // Add this import

const Profile = () => {
  return (
    <div className="profile-container min-h-screen flex items-center justify-center p-4 z-10">
      <div className="w-1/2 bg-transparent p-8 font-mono text-sm leading-relaxed overflow-y-auto max-h-screen">
        <header className="mb-8 flex items-center">
          <h1 className="text-lg font-bold mr-2">Ramunas Nognys</h1>
          <span className="leading-loose">Vilnius, Lithuania</span> {/* Added line height */}
        </header>

        <section className="mb-8">
          <h2 className="font-bold mb-2">
            <strong>today</strong> {/* Made bold */}
          </h2>
          <p>
            I am currently working as an offshore scaffolder at Altrad on the Tyra Redevelopment Project, located in the North Sea off the coast of Denmark.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-bold mb-2">
            previously worked at {/* Made bold */}
            <span className="font-semibold">
              <Link href="https://example.com/altrad" className="underline selectable">altrad</Link>,&nbsp; 
              <Link href="https://example.com/van-der-panne" className="underline selectable">van der panne</Link>,&nbsp; 
              <Link href="https://example.com/oranje-group" className="underline selectable">oranje group</Link>,&nbsp; 
              <Link href="https://example.com/trad-scaffolding" className="underline selectable">trad scaffolding</Link>&nbsp; 
              and&nbsp; 
              <Link href="https://example.com/brogan-group" className="underline selectable">brogan group</Link>
            </span>
          </h2>
        </section>

        <section className="mb-8">
          <h2 className="font-bold mb-2">
            <strong>Key Skills</strong> {/* Made bold */}
          </h2>
          <p>
            Advanced scaffolding techniques, project management, safety compliance, team leadership, problem-solving,
            adaptability
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-2">
            <strong>links</strong> {/* Made bold */}
          </h2>
          <ul>
            <li className="mb-2">
              <Link href="mailto:ramunas.nognys@example.com" className="underline selectable" aria-label="Send email to Ramunas Nognys">
                email
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://linkedin.com/in/ramunas-nognys" className="underline selectable" aria-label="Visit Ramunas Nognys' LinkedIn profile">
                linkedin
              </Link>
            </li>

            <li>
              <Link href="https://github.com/ramunasnognys" className="underline selectable" aria-label="visit Ramunas Nognys' github profile">
                github
              </Link>
            </li>
            <li>
              <Link href="https://x.com/RamunasNognys" className="underline selectable" aria-label="visit Ramunas Nognys' X profile">
                x
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Profile

```

# app\components\Char.tsx

```tsx
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
```

# app\components\ASCIIBackground.tsx

```tsx
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
      const gridSize = 20
      const cols = Math.ceil(dimensions.width / gridSize)
      const rows = Math.ceil(dimensions.height / gridSize)

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (Math.random() > 0.3) {
            const char = ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)]
            const x = col * gridSize
            const y = row * gridSize
            const size = Math.random() * 3 + 14
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
      const hoverCount = Math.min(20, charCount)

      for (let i = 0; i < hoverCount; i++) {
        const randomIndex = Math.floor(Math.random() * charCount)
        const element = charElements[randomIndex] as HTMLElement
        if (element && !hoveredChars.includes(element.id)) {
          element.dispatchEvent(new Event('autohover'))
          hoveredChars.push(element.id)
        }
      }
    }

    const intervalId = setInterval(autoHover, 800)

    return () => clearInterval(intervalId)
  }, [chars])

  return (
    <div className={`fixed inset-0 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'} pointer-events-none z-0`}>
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
```

