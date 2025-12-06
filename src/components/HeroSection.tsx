
import Nav from "./Nav";
import { HeroButtonTitle } from "../Data/Data";
import type React from "react";
import { useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { LuScreenShare } from "react-icons/lu";

type HeroProps = {
  mood:String,
  language:string,
  // event: React.ChangeEvent<HTMLInputElement>
  setLanguage:React.Dispatch<React.SetStateAction<string>>,
  handleMood:()=>void,
}
const HeroSection = (props:HeroProps) => {
    const {t,i18n } = useTranslation();
         useEffect(()=>{
         if (props.language)
          i18next.changeLanguage(props.language);
      
        },[props.language,i18n]);
  return (
    <div className="">
     <Nav mood={props.mood} handleMood={props.handleMood} language={props.language} setLanguage={props.setLanguage}/>
    <div className="grid lg:grid-cols-2 grid-cols-1    w-full h-screen pt-8 px-8 mt-8">
        <div className={` backdrop-blur-lg ${props.mood==='light'?'bg-white/10 ':'bg-black/5'}  rounded-2xl py-16 px-8 flex flex-col self-center justify-around h-fit `}>
        <div className="">
           <h1 className={`text-3xl md:text-5xl font-bold mb-5 ${props.mood==='light' ? 'text-white ':'text-black '}  `}>{t("main_heading")}</h1>
            <h3 className={` text-lg ${props.mood==='light'?'text-gray-300':'text-gray-600 '} `}>{t("second_heading")}</h3>
        </div>
           <div className="p-4 flex gap-4 ">              
            <button key={1}className={`${props.mood==='light'?'text-white bg-white/5 backdrop-blur-lg hover:bg-white/15'
              :'text-black bg-linear-to-r  from-purple-400 to-indigo-300 hover:from-purple-300 hover:to-indigo-200'}
              rounded-xl  p-2  cursor-pointer  backdrop-blur-lg items-center inline-flex gap-2`}>
              {t("primary_title")} < FaArrowRightToBracket /> </button>
              
            <button key={2}className={`${props.mood==='light'?'text-white bg-white/5 backdrop-blur-lg hover:bg-white/15'
              :'text-black bg-linear-to-r  from-purple-400 to-indigo-300 hover:from-purple-300 hover:to-indigo-200'}
              rounded-xl  p-2  cursor-pointer  backdrop-blur-lg items-center inline-flex gap-2`}>
              {t("secondery_title")}<LuScreenShare/> </button>
           
           </div>
        </div>
        <div className="flex self-center justify-center">
          <img  src='../src/assets/classroom.png' alt="image of class room" />
        </div>
    </div>
    </div>
  )
}

export default HeroSection
