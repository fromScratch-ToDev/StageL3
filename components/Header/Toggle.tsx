'use client'
import { SetLangContext } from "@/context/Context";
import { useContext } from "react";


export default function Toggle(props : {lang : string, className? : string}){
    const lang = props.lang;
    const className = props.className;
    const set_lang = useContext(SetLangContext);

    function handleClick() {
        const newLang = lang === "FR" ? "EN" : "FR";
        set_lang(newLang);
    }

    if (lang === "FR") {
        return (
            <div onClick={handleClick} className={`flex flex-row bg-secondary rounded-4xl border-1 border-secondary w-[67px] xl:w-22.5 h-[30px] xl:h-10 items-center gap-1.25 cursor-pointer ${className}`}>
            <button className="text-xs xl:text-base bg-primary h-full w-[37px] xl:w-12.5 rounded-full cursor-pointer">FR</button>
            <p className="text-xs xl:text-base text-primary h-max cursor-pointer w-[30px] xl:w-10">EN</p>
        </div>
        )
    } else {
        return (
            <div onClick={handleClick} className={`flex flex-row bg-secondary rounded-4xl border-1 border-secondary w-[67px] xl:w-22.5 h-[30px] xl:h-10 items-center gap-1.25 cursor-pointer ${className}`}>
            <p className="text-xs xl:text-base text-primary text-end h-max cursor-pointer w-[30px] xl:w-10">FR</p>
            <button className="text-xs xl:text-base bg-primary  h-full w-[37px] xl:w-12.5 rounded-full cursor-pointer">EN</button>
        </div>
        )
    }
}