import Link from 'next/link'

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-1/2 bg-white p-8 shadow-sm rounded-sm font-mono text-sm leading-relaxed overflow-y-auto max-h-screen">
        <header className="mb-8">
          <h1 className="text-lg font-bold">Ramunas Nognys</h1>
          <p>Vilnius, Lithuania</p>
        </header>

        <section className="mb-8">
          <h2 className="font-bold mb-2">today</h2>
          <p>
          I am working on the Tyra Redevelopment Project in the North Sea off the coast of Denmark as an offshore scaffolder.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-bold mb-2">previously worked at</h2>
          <ul>
            <li className="mb-1"><span className="font-semibold">Altrad</span> - Offshore Scaffolder/Rigger at Tyra Redevelopment Project</li>
            <li className="mb-2"><span className="font-semibold">Inwatch for Van der Panne</span> - Offshore Scaffolder | Foreman</li>
            <li className="mb-2"><span className="font-semibold">Trad Group of Companies</span> - Scaffolder</li>
            <li className="mb-2"><span className="font-semibold">Oranje Group</span> - Leading Scaffolder</li>
            <li className="mb-2"><span className="font-semibold">UTGES BV</span> - Scaffolder / Foreman</li>
            <li><span className="font-semibold">Brogan Group</span> - Scaffolder</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-bold mb-2">Key Skills</h2>
          <p>
            Advanced scaffolding techniques, project management, safety compliance, team leadership, problem-solving,
            adaptability
          </p>
        </section>

        <section>
          <h2 className="font-bold mb-2">Contact</h2>
          <ul>
            <li className="mb-2">
              <Link href="mailto:ramunas.nognys@example.com" className="underline" aria-label="Send email to Ramunas Nognys">
                Email Ramunas Nognys
              </Link>
            </li>
            <li className="mb-2">
              <Link href="https://linkedin.com/in/ramunas-nognys" className="underline" aria-label="Visit Ramunas Nognys' LinkedIn profile">
                LinkedIn Profile
              </Link>
            </li>
            <li>
              <Link href="tel:+37065442383" className="underline" aria-label="Call Ramunas Nognys">
                Call: +370 654 42383
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Profile
