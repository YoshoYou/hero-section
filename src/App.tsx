import { useState } from 'react'
import './App.css'
import './i18n.js'
import HeroSection from './components/HeroSection'
// import Nav from './components/Nav'

function App() {
  const [mood, setMood] = useState<string>('dark')
  const [language, setLanguage] = useState<string>('english')
  const handleMood = () => {
    setMood(prev => (prev === 'light' ? 'dark' : 'light'))
    console.log(mood)
  }

  return (
    <div className={`${mood === 'light' ? ' bg-linear-to-r  from-black to-purple-900 ' : 'bg-white '}` } >
      {/* we can import Nav component right here but, as long as you want the HeroSection the first one I import Nav inside HerSection */}
      {/* <Nav mood={mood} handleMood={handleMood} />  */}
      <HeroSection mood={mood} handleMood={handleMood} language={language}  setLanguage={setLanguage} />
    </div>
  )
}

export default App
