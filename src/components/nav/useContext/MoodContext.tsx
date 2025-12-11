import React, { createContext, useContext, useState } from "react";
import type { MoodContextType } from "./Context";
import { defaultMoodContext } from "./Context";

type MoodContextProps = {
    children: React.ReactNode;
};

export const MoodContext = createContext<MoodContextType>(defaultMoodContext);

export const MoodContextProvider = ({ children }: MoodContextProps) => {
    const [mood, setMood] = useState<string>(localStorage.getItem('mood')? JSON.parse(localStorage.getItem("mood")!):"light");
    const toggleMood = () => setMood((prev) => (prev === "light" ? "dark" : "light"));
    const [language,setLanguage]=useState<string>(localStorage.getItem('language')? JSON.parse(localStorage.getItem("language")!):'english');
    const toggleLanguage =()=>setLanguage((prev)=>(prev==="english"?"arabic":"english"))

    return (
        <MoodContext.Provider value={{ mood, setMood, toggleMood ,language,setLanguage,toggleLanguage}}>
            {children}
        </MoodContext.Provider>
    );
};

export const useMood = () => useContext(MoodContext);