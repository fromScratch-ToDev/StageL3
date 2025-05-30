'use client'
import { GaleriesContext, LangContext } from "@/context/Context";
import Close from "@/public/svg/Close";
import Link from "next/link";
import { useContext, useState } from "react";
import Toggle from "./Toggle";

function MenuMobile(props : {handleClick : () => void}) {
    const handleClick = props.handleClick;
    const lang = useContext(LangContext);
    const galeries = useContext(GaleriesContext);
    const [menu_galeries, set_menu_galeries] = useState(false);
    const [menu_expositions, set_menu_expositions] = useState(false);


    if(menu_galeries){
        return(
            <div className="fixed inset-0 z-10 bg-primary ">
                <div className="flex justify-end pt-2 pr-2 cursor-pointer" onClick={()=>set_menu_galeries(!menu_galeries)} >
                    <Close></Close>
                </div>
                <ul className="list-none pl-5 space-y-3 font-bold">
                    {galeries.map((galerie) => (
                        <li key={galerie.nom_fr} ><Link onClick={handleClick} href={`/galerie?nom=${galerie.nom_fr}`}>{lang === "FR" ? galerie.nom_fr : galerie.nom_en}</Link></li>
                    ))}
                </ul>
            </div>
        )
    }

    if(menu_expositions){
        return(
            <div className="fixed inset-0 z-10 bg-primary ">
                <div className="flex justify-end pt-2 pr-2 cursor-pointer" onClick={()=>set_menu_expositions(!menu_expositions)} >
                    <Close></Close>
                </div>
                <ul className="list-none pl-5 space-y-3 font-bold">
                    <li><Link onClick={handleClick} href="/expositions/gaillac">{"Gaillac"}</Link></li>
                    <li><Link onClick={handleClick} href="/expositions/los_angeles">{"Los angeles"}</Link></li>
                </ul>
            </div>
        )
    }

    return (
        <div className="fixed inset-0 z-10 bg-primary ">
            <div className="flex justify-end pt-2 pr-2 cursor-pointer" onClick={handleClick} >
                <Close></Close>
            </div>
            <nav className="list-none pl-5 text-2xl space-y-3 font-bold">
                <li><Link onClick={handleClick} href="/">{lang === "FR" ? "Accueil" : "Home"}</Link></li>
                <li className="cursor-pointer w-max hover:underline" onClick={()=>set_menu_galeries(!menu_galeries)}> {lang === "FR" ? "Galeries" : "Galleries"} </li>   
                <li className="cursor-pointer w-max hover:underline" onClick={()=>set_menu_expositions(!menu_expositions)}> {lang === "FR" ? "Expositions" : "Exhibitions"} </li>   
                <li><Link onClick={handleClick} href="/biographie">{lang === "FR" ? "Biographie" : "Biography"}</Link></li>
                <li><Link onClick={handleClick} href="/contact">{lang === "FR" ? "Contact" : "Contact"}</Link></li>
            </nav>
            <Toggle lang={lang} className="ml-5 mt-5" ></Toggle>
        </div>
    )
}

export default MenuMobile