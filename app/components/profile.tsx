'use client'

import Link from 'next/link'
import React from 'react';
import { ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  index: number;
}

const Profile = () => {
  const baseDelay = 0.5; // 0.5 second base delay
  const animationDelayStep = 0.2; // 0.1 second step between elements

  const AnimatedElement = ({ children, tag = 'div', className = '', index }: AnimatedElementProps) => {
    const Tag = tag;
    return (
      <Tag 
        className={`fade-in-top-down ${className}`} 
        style={{ animationDelay: `${baseDelay + index * animationDelayStep}s` }}
      >
        {children}
      </Tag>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 selectable text-selectable profile-overlay">
      <div className="w-1/2 bg-white bg-opacity-90 p-8 shadow-sm rounded-sm font-mono text-sm leading-relaxed overflow-y-auto max-h-screen">
        <AnimatedElement tag="header" className="mb-8 flex flex-col" index={0}>
          <div className="flex justify-between items-center w-full">
            <h1 className="text-lg">Ramunas Nognys</h1>
            {/* <AudioPlayer /> */}
          </div>
          <span className="leading-loose">Vilnius, lt</span>
        </AnimatedElement>

        <AnimatedElement tag="section" className="mb-8" index={1}>
          <h2 className="font-bold mb-2">
            <strong>today</strong> {/* Made bold */}
          </h2>
          <p>
            I am currently working as an offshore scaffolder at <Link href="https://uk.altradservices.com/" className="underline">altrad</Link>, on the Tyra Redevelopment Project, located in the North Sea off the coast of Denmark.
          </p>
        </AnimatedElement>

        <AnimatedElement tag="section" className="mb-8" index={2}>
          <h2 className="font-bold mb-2">
            previously worked at {/* Made bold */}
            <span className="font-semibold">
              <Link href="https://uk.altradservices.com/" className="underline">altrad</Link>,&nbsp; 
              <Link href="https://panne.nl/en/" className="underline">van der panne</Link>,&nbsp; 
              <Link href="https://www.oranjegroep.com/" className="underline">oranje group</Link>,&nbsp; 
              <Link href="https://www.tradscaffolding.com/" className="underline">trad scaffolding</Link>&nbsp; 
              and&nbsp; 
              <Link href="https://www.brogangroup.com/" className="underline">brogan group</Link>
            </span>
          </h2>
        </AnimatedElement>

        <AnimatedElement tag="section" className="mb-8" index={3}>
          <h2 className="font-bold mb-2">
            <strong>Key Skills</strong> {/* Made bold */}
          </h2>
          <p>
          I build the scaffolds by day, the apps by night. Armed with v0.dev, Claude AI, Cursor Editor, Next.js, Tailwind, and ShadCN — crafting the future, one line at a time.
          </p>
        </AnimatedElement>

        <AnimatedElement tag="section" index={4}>
          <h2 className="font-bold mb-2">
            <strong>links</strong> {/* Made bold */}
          </h2>
          <ul className="links-list">
            <li>
              <Link href="https://x.com/RamunasNognys" className="underline" aria-label="visit Ramunas Nognys' X profile">
                twitter/x
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/ramunas-nognys" className="underline" aria-label="Visit Ramunas Nognys' LinkedIn profile">
                linkedin
              </Link>
            </li>
            <li>
              <Link href="https://github.com/ramunasnognys" className="underline" aria-label="visit Ramunas Nognys' github profile">
                github
              </Link>
            </li>
            <li>
              <Link href="mailto:ramunas.nognys@example.com" className="underline" aria-label="Send email to Ramunas Nognys">
                email
              </Link>
            </li>
          </ul>
        </AnimatedElement>
      </div>
    </div>
  )
}

export default Profile
