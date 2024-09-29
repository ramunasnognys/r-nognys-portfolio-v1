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
    },
  },
  plugins: [],
};
export default config;

```

# README.md

```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18.3.8",
    "@types/react-dom": "^18.3.0",
    "eslint": "^8",
    "eslint-config-next": "14.2.13",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
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

# app\page.tsx

```tsx
import ASCIIBackground from './components/ASCIIBackground'
// import ToggleButton from './components/ToggleButton'

export default function Home() {
  return (
    <main>
      <ASCIIBackground />
      {/* <ToggleButton /> */}
    </main>
  )
}

```

# app\layout.tsx

```tsx
import type { Metadata } from 'next'
import { ThemeProvider } from './context/ThemeContext'

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
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

# app\globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

html, body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#__next {
  height: 100vh;
  width: 100vw;
  
}

main {
  height: 100vh;
  width: 100vw;
  overflow: hidden; 

}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

```

# app\favicon.ico

This is a binary file of the type: Binary

# lib\utils.ts

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

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

const Profile = () => {
  return (
    <div className="max-w-2xl w-full bg-white p-8 shadow-sm rounded-sm text-sm leading-relaxed">
      <header className="mb-8">
        <h1 className="text-lg font-bold">ramunas nognys</h1>
        <p>offshore scaffolder | rigger</p>
      </header>

      <section className="mb-8">
        <h2 className="font-bold mb-2">professional summary</h2>
        <p>
          dynamic and results-driven offshore scaffolder and rigger with over a decade of proven experience in the
          oil & gas and renewable energy sectors. renowned for executing complex projects with precision and an
          unwavering commitment to safety standards. demonstrated expertise in advanced scaffolding techniques,
          project optimization, and leading high-performance teams.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-bold mb-2">work experience</h2>
        <p>
          <span className="font-semibold">altrad</span> - offshore scaffolder/rigger at tyra redevelopment project
        </p>
        <p>
          <span className="font-semibold">inwatch for van der panne</span> - offshore scaffolder | foreman
        </p>
        <p>
          <span className="font-semibold">trad group of companies</span> - scaffolder
        </p>
        <p>
          <span className="font-semibold">oranje group</span> - leading scaffolder
        </p>
        <p>
          <span className="font-semibold">utges bv</span> - scaffolder / foreman
        </p>
        <p>
          <span className="font-semibold">brogan group</span> - scaffolder
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-bold mb-2">key skills</h2>
        <p>
          advanced scaffolding techniques, project management, safety compliance, team leadership, problem-solving,
          adaptability
        </p>
      </section>

      <section>
        <h2 className="font-bold mb-2">contact</h2>
        <ul>
          <li>
            <Link href="mailto:ramunas.nognys@example.com" className="underline">
              email
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/ramunas-nognys" className="underline">
              linkedin
            </Link>
          </li>
          <li>
            <Link href="tel:+37065442383" className="underline">
              phone
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Profile
```

# app\components\Char.tsx

```tsx
import React, { useEffect, useState } from 'react'
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
  const [isAutoHovered, setIsAutoHovered] = useState(false)
  const [isMouseHovered, setIsMouseHovered] = useState(false)
  const [opacity, setOpacity] = useState(0)  // Start with 0 opacity
  
  const handleMouseEnter = () => {
    setIsMouseHovered(true)
    setOpacity(1)
  }
  const handleMouseLeave = () => {
    setIsMouseHovered(false)
    setTimeout(() => setOpacity(0), 100)  // Start fading out after a short delay
  }

  const lightColor = "rgba(0, 0, 0, 0.2)"
  const darkColor = "rgba(0, 0, 0, 0.08)" 
  const lightHoverColor = "rgba(255, 0, 0, 0.8)"
  const darkHoverColor = "rgba(127, 127, 127, 0.5"
  const mouseHoverColor = "red"

  useEffect(() => {
    const element = document.getElementById(id)
    if (element) {
      element.addEventListener('autohover', handleAutoHover)
      element.addEventListener('autohoverclear', handleAutoHoverClear)
      element.addEventListener('mouseenter', handleMouseEnter)
      element.addEventListener('mouseleave', handleMouseLeave)
    }
    // Fade in effect
    setTimeout(() => setOpacity(1), 100)
    return () => {
      if (element) {
        element.removeEventListener('autohover', handleAutoHover)
        element.removeEventListener('autohoverclear', handleAutoHoverClear)
        element.removeEventListener('mouseenter', handleMouseEnter)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [id])

  const handleAutoHover = () => {
    if (!isMouseHovered) {
      setIsAutoHovered(true)
      setOpacity(1)
    }
  }

  const handleAutoHoverClear = () => {
    setIsAutoHovered(false)
    setTimeout(() => setOpacity(0), 100)  // Start fading out after a short delay
  }

  return (
    <>
      <style jsx>{`
        .char {
          transition: fill 0.3s ease, transform 0.5s ease, opacity 0.2s ease;  // Increased opacity transition duration
        }
        .char:hover {
          transform: scale(1.2);
        }
      `}</style>
      <text
        id={id}
        x={x}
        y={y}
        fontSize={size}
        fill={isMouseHovered 
          ? mouseHoverColor
          : (isAutoHovered 
            ? (isDark ? darkHoverColor : lightHoverColor)
            : (isDark ? darkColor : lightColor)
          )
        }
        fontFamily="monospace"
        className="char"
        opacity={opacity}
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
```

