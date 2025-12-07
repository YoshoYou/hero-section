import sun_light from '../../assets/sun_light.png'
import night from '../../assets/night.png'
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

////// declare typescript parameters
type NavProps = {
  mood: string,
  handleMood:()=>void,
  language:string,
  handleLanguage:(event:React.ChangeEvent<HTMLSelectElement>)=>void,

}

const Nav = (props:NavProps) => {
  
    const {t,i18n } = useTranslation();
        const navItems = ["about","contact","info"];
        const linkClass = `${props.mood ==='light'  ?'text-white hover:text-gray-300 ' : 'text-black hover:text-gray-500  '}  `;
        const selectClass=` ${props.mood ==='light'  ?'text-white hover:shadow-[0_10px_4px_-3px_rgba(255,255,255,0.3)] ':'text-black hover:shadow-[0_10px_4px_-3px_rgba(128,0,128,0.3)] '} outline-none cursor-pointer  `

       useEffect(()=>{
       if (props.language)
        i18n.changeLanguage(props.language);
      },[props.language,i18n]);/// in everytime we click on en/ar button we change the language and we change the file we detect the language from 

  return (
    <div className={` text-10 lg:text-2xl font-bold flex justify-around items-center p-4 shadow-xl/30 shadow-purple-500`}>
          {/* maping over to avoid repeating and use linkClass to never prolong the code right here */}
          {navItems.map((key) => (
            <a href="#" key={key} className={linkClass}>{t(key)}</a>
          ))}
      <button onClick={props.handleMood} className={`${props.mood ==='light'  ?'text-white hover:shadow-[0_10px_4px_-3px_rgba(255,255,255,0.3)]  ' : 'text-black hover:shadow-[0_10px_4px_-3px_rgba(128,0,128,0.3)] ' } cursor-pointer outline-0 hover:shadow-[0_10px_4px_-3px_rgba(128,0,128,0.3)] `}>
        {props.mood==='light'? <img className=" w-4 h-4  lg:w-10 lg:h-10 " src={sun_light} alt="" /> :<img className="w-4 h-4 lg:w-8 lg:h-8 " src={night} alt="" /> }
      </button>
      <select className={selectClass} defaultValue={"english"}  id="" onChange={props.handleLanguage}>
        <option className="text-black! border-none! " value="arabic">ar</option>
        <option className="text-black! border-none! " value="english" >en</option>
      </select>
    </div>
  )
}

export default Nav
