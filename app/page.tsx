import ASCIIBackground from './components/ASCIIBackground'
import Profile from './components/profile'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ramunas Nognys - Offshore Scaffolder and Rigger',
  description: 'Ramunas Nognys - Experienced offshore scaffolder and rigger with a decade of experience in the oil & gas and renewable energy sectors.',
}

export default function Home() {
  return (
    <main className="relative h-screen w-screen ">
      <div className="profile-container absolute">
        <Profile />
      </div>
    </main>
  )
}
