
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type NavProps = {
  mood:String,
  handleMood:()=>void,
  language:string,
  setLanguage:React.Dispatch<React.SetStateAction<string>>,

}

const Nav = (props:NavProps) => {
    const {t,i18n } = useTranslation();
      const handleLanguage=(event:React.ChangeEvent<HTMLSelectElement>,)=>{
        props.setLanguage(event.target.value)
  }
       useEffect(()=>{
       if (props.language)
        i18n.changeLanguage(props.language);
    
      },[props.language,i18n]);
  return (
    <div className={`text-2xl font-bold flex justify-around items-center p-4 shadow-xl/30 shadow-purple-500`}>
     
          {/* //// maping over to have the nav anchro tag instead of doing it manually and repeat the same thing over and over */}
          <a href="#" key='1' className={`   ${props.mood ==='light'  ?'text-white hover:text-gray-300 ' : 'text-black hover:text-gray-500  '}  `}>{t("about")}</a>
          <a href="#" key='2' className={`   ${props.mood ==='light'  ?'text-white hover:text-gray-300 ' : 'text-black hover:text-gray-500 '}  `}>{t("contact")}</a>
          <a href="#" key='3' className={`   ${props.mood ==='light'  ?'text-white hover:text-gray-300 ' : 'text-black hover:text-gray-500 '}  `}>{t("info")}</a>
    
     
      <button onClick={props.handleMood} className={`${props.mood ==='light'  ?'text-white hover:shadow-[0_10px_4px_-3px_rgba(255,255,255,0.3)]  ' : 'text-black hover:shadow-[0_10px_4px_-3px_rgba(128,0,128,0.3)] ' } cursor-pointer outline-0 hover:shadow-[0_10px_4px_-3px_rgba(128,0,128,0.3)] `}>
        {props.mood==='light'? <img className="w-10 h-10 " src="../src/assets/sun_light.png" alt="" /> :<img className="w-8 h-8 " src="../src/assets/night.png" alt="" /> }
      </button>
      <select className={` ${props.mood ==='light'  ?'text-white hover:shadow-[0_10px_4px_-3px_rgba(255,255,255,0.3)] ':'text-black hover:shadow-[0_10px_4px_-3px_rgba(128,0,128,0.3)] '} outline-none cursor-pointer  `} defaultValue={"english"} name="" id="" onChange={handleLanguage}>
        <option className="text-black! border-none" value="arabic">ar</option>
        <option className="text-black! border-none" value="english" >en</option>
      </select>
    </div>
  )
}

export default Nav
