import Profile from './components/profile'
import ASCIIBackground from './components/ASCIIBackground'
import AudioPlayer from './components/AudioPlayer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="audio-player-container">
        <AudioPlayer />
      </div>
      <div className="relative w-full max-w-2xl">
        <div className="profile-container">
          <div className="flex-layout">
            <Profile />
            <ASCIIBackground />
          </div>
        </div>
      </div>
    </main>
  )
}