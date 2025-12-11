import sun_light from '../../assets/sun_light.png'
import night from '../../assets/night.png'
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMood } from './useContext/MoodContext';


const Nav = () => {
   const { mood,toggleMood,language,toggleLanguage } = useMood();
    const {t,i18n } = useTranslation();
        const navItems = ["about","contact","info"];
        const linkClass =  `${mood==='light'?'text-white hover:text-gray-300 ' : 'text-black hover:text-gray-500' } `;
        const selectClass=`${mood==='light'? 'text-white hover:shadow-[0_10px_4px_-3px_rgba(255,255,255,0.3)] ':'text-black hover:shadow-[0_10px_4px_-3px_rgba(128,0,128,0.3)] '} outline-none cursor-pointer  `
       useEffect(()=>{
       if (language) {
        i18n.changeLanguage(language);
        localStorage.setItem('language',JSON.stringify(language))
        localStorage.setItem('mood',JSON.stringify(mood))
       }
      },[language,mood,i18n]);/// in everytime we click on en/ar button we change the language and we change the file we detect the language from 

  return (
    <div className={` text-10 lg:text-2xl font-bold flex justify-around items-center p-4 shadow-xl/30 shadow-purple-500`}>
          {/* maping over to avoid repeating and use linkClass to never prolong the code right here */}
          {navItems.map((key) => (
            <a href="#" key={key} className={linkClass}>{t(key)}</a>
          ))}
      <button onClick={toggleMood}  className={`${mood==='light'? ' hover:shadow-[0_10px_4px_-3px_rgba(255,255,255,0.3)] ':' hover:shadow-[0_10px_4px_-3px_rgba(128,0,128,0.3)]'} cursor-pointer outline-0  `}>
        {mood==='light'? <img className=" w-6 h-6 lg:w-10 lg:h-10 " src={sun_light} alt="" /> :<img className="w-5 h-5 lg:w-8 lg:h-8 " src={night} alt="" /> }
      </button>
      <select className={selectClass} defaultValue={`${language}`}  id="" onChange={toggleLanguage}>
        <option className="text-black! border-none! " value="arabic">ar</option>
        <option className="text-black! border-none! " value="english" >en</option>
      </select>
    </div>
  )
}

export default Nav
