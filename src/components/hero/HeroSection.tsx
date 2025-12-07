import Nav from "../nav/Nav";
import classroom from "../../assets/classroom.png";
import { useEffect } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { LuScreenShare } from "react-icons/lu";

type HeroProps = {
  mood:string,
  language:string,
  handleLanguage:(event:React.ChangeEvent<HTMLSelectElement>)=>void,
  handleMood:()=>void,
}

const HeroSection = (props:HeroProps) => {
   const buttonClass = `${props.mood==='light'?'text-white bg-white/5 backdrop-blur-lg hover:bg-white/15 ':'text-black bg-linear-to-r  from-purple-400 to-indigo-300 hover:from-purple-300 hover:to-indigo-200 '} rounded-xl   p-2  cursor-pointer  backdrop-blur-lg items-center flex justify-center sm:justify-first  sm:self-center  gap-2`
   const {t,i18n } = useTranslation();
         useEffect(()=>{ ///  whenever the language is changed we change the file that we bring the data from
         if (props.language)
          i18next.changeLanguage(props.language);
        },[props.language,i18n]);

  return (
    <div className={`${props.language=='english'?'ltr':'rtl'}`}>
     <Nav mood={props.mood} handleMood={props.handleMood} language={props.language} handleLanguage={props.handleLanguage}/>
    <main className="grid lg:grid-cols-2 grid-cols-1    w-full  pt-8 px-8 mt-12 pb-30 rounded-4xl shadow-2xl shadow-white/35">
        <div className={` backdrop-blur-lg ${props.mood==='light'?'bg-white/10 ':'bg-black/5 '}  rounded-2xl py-16 px-8 flex flex-col self-center justify-around h-fit `}>
        <div className="my-4" >
           <h1 className={`text-2xl md:text-5xl font-bold mb-5  ${props.mood==='light' ? 'text-white ':'text-black '}  `}>{t("main_heading")}</h1>
            <h3 className={` text-lg ${props.mood==='light'?'text-gray-300':'text-gray-600 '} `}>{t("second_heading")}</h3>
        </div>
           <div className="p-4 flex gap-4  lg:flex-row flex-col ">              
            <button key={1}className={buttonClass}>
              {t("primary_title")} < FaArrowRightToBracket /> </button>  
            <button key={2}className={buttonClass}>
              {t("secondery_title")}<LuScreenShare /> </button>
           </div>
        </div>
        <div className="flex  justify-center  lg:m-10 m-20 ">
          <img src={classroom} className="" alt="image of class room" />
        </div>
    </main>
    </div>
  )
}

export default HeroSection
