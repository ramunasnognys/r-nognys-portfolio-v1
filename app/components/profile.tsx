import Link from 'next/link'
import React from 'react'; // Add this import

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-1/2 bg-white p-8 shadow-sm rounded-sm font-mono text-sm leading-relaxed overflow-y-auto max-h-screen">
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
              <Link href="https://example.com/altrad" className="underline">altrad</Link>,&nbsp; 
              <Link href="https://example.com/van-der-panne" className="underline">van der panne</Link>,&nbsp; 
              <Link href="https://example.com/oranje-group" className="underline">oranje group</Link>,&nbsp; 
              <Link href="https://example.com/trad-scaffolding" className="underline">trad scaffolding</Link>&nbsp; 
              and&nbsp; 
              <Link href="https://example.com/brogan-group" className="underline">brogan group</Link>
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
              <Link href="mailto:ramunas.nognys@example.com" className="underline" aria-label="Send email to Ramunas Nognys">
                email
              </Link>
            </li>
            <li className="mb-2">
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
              <Link href="https://x.com/RamunasNognys" className="underline" aria-label="visit Ramunas Nognys' X profile">
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
