import {  useMood } from './components/nav/useContext/MoodContext'
import './App.css'
import './i18n.js'
import HeroSection from './components/hero/HeroSection.js'

function App() {

  const { mood,language } = useMood();
  return (
    <div className={`  ${language=='english'?'ltr':'rtl'}  ${mood==='light'?' bg-linear-to-r  from-blue-950 to-purple-800  ' : ' bg-white '}`}>
        
      <HeroSection    />
      
     </div >
  )
}

export default App
