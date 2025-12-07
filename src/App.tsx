import { useState } from 'react'
import './App.css'
import './i18n.js'
import HeroSection from './components/hero/HeroSection.js'
// import Nav from './components/Nav'

function App() {
  const [mood, setMood] = useState<string>('dark')
  const [language, setLanguage] = useState<string>('english')
    const handleLanguage=(event:React.ChangeEvent<HTMLSelectElement>)=>{
    setLanguage(event.target.value)
    console.log(language)
    }
  const handleMood = () => {
    /// to control  the mood I just learned about createcontext and I am not sure how to use it yet I will edit it when I master  it
    setMood(prev => (prev === 'light' ? 'dark' : 'light')) 
    console.log(mood)
  }

  return (
    <div className={`${mood === 'light' ? ' bg-linear-to-r  from-black to-purple-900 ' : 'bg-white '} h-full` } >
      {/* we can import Nav component right here but, as long as you want the HeroSection the first one I import Nav inside HerSection */}
      {/* <Nav mood={mood} handleMood={handleMood} />  */}
      <HeroSection mood={mood} handleMood={handleMood} language={language}  handleLanguage={handleLanguage} />
    </div>
  )
}

export default App
