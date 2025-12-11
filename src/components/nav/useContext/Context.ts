

export type MoodContextType = {
    mood: string;
    setMood: React.Dispatch<React.SetStateAction<string>>;
    toggleMood: () => void;
    language:string ;
    setLanguage:React.Dispatch<React.SetStateAction<string>>;
    toggleLanguage:()=>void
};

export const defaultMoodContext: MoodContextType = {
    ///state and methods to handle the value
    mood: "light",
    setMood: () => {},
    toggleMood: () => {},

    language:"english",
    setLanguage:()=>{},
    toggleLanguage:()=>{}
};