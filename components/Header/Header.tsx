"use client"

import { Dispatch, SetStateAction, useState } from "react";
import Menu from "./Menu";
import Toggle from "./Toggle";

export default function Header(props : {isAccueil? : boolean, set_lang : Dispatch<SetStateAction<string>>}) {
    const isAccueil = props.isAccueil;
    const set_lang = props.set_lang;
    const [lang, setLang] = useState("FR")
    
    function handleClick() {
        const newLang = lang === "FR" ? "EN" : "FR";
        setLang(newLang);
        set_lang(newLang);
    }

    return(
        <div className="flex flex-row justify-between w-full h-1/12">
            <div className="w-max h-full">
                <p className="text-3xl font-merriweather">François Malespine</p>
                {! isAccueil && <p className="text-xl text-tertiary font-poppins">Espaces Intérieurs</p>}
            </div>
            <div className="flex flex-row gap-10 h-full ">
                <Menu></Menu>
                <Toggle handleClick={handleClick} lang={lang}></Toggle>
            </div>
        </div>
    )
}