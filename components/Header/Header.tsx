"use client"

import { LangContext, SetLangContext } from "@/context/Context";
import { useContext } from "react";
import Menu from "./Menu";
import Toggle from "./Toggle";

export default function Header(props : {isAccueil? : boolean}) {
    const isAccueil = props.isAccueil;
    const lang = useContext(LangContext);
    const set_lang = useContext(SetLangContext);
    
    function handleClick() {
        const newLang = lang === "FR" ? "EN" : "FR";
        set_lang(newLang);
    }

    return(
        <div className="flex flex-row justify-between w-full h-1/12 pt-6 px-12">
            <div className="w-max h-full">
                <p className="text-3xl font-merriweather">François Malespine</p>
                {! isAccueil && <p className="text-xl text-tertiary font-poppins"> {lang === "FR" ? "Espaces Intérieurs" : "Interior Spaces"}</p>}
            </div>
            <div className="flex flex-row gap-10 h-full ">
                <Menu></Menu>
                <Toggle handleClick={handleClick} lang={lang}></Toggle>
            </div>
        </div>
    )
}