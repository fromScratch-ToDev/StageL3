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


    if(menu_galeries){
        return(
            <div className="fixed inset-0 z-10 bg-primary ">
                <div className="flex justify-end pt-2 pr-2" onClick={()=>set_menu_galeries(!menu_galeries)} >
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

    return (
        <div className="fixed inset-0 z-10 bg-primary ">
            <div className="flex justify-end pt-2 pr-2" onClick={handleClick} >
                <Close></Close>
            </div>
            <nav className="list-none pl-5 text-2xl space-y-3 font-bold">
                <li><Link onClick={handleClick} href="/">{lang === "FR" ? "Accueil" : "Home"}</Link></li>
                <li onClick={()=>set_menu_galeries(!menu_galeries)}> {lang === "FR" ? "Galeries" : "Galleries"} </li>   
                <li><Link onClick={handleClick} href="/expositions">{lang === "FR" ? "Expositions" : "Exhibitions"}</Link></li>
                <li><Link onClick={handleClick} href="/biographie">{lang === "FR" ? "Biographie" : "Biography"}</Link></li>
                <li><Link onClick={handleClick} href="/contact">{lang === "FR" ? "Contact" : "Contact"}</Link></li>
            </nav>
            <Toggle lang={lang} className="ml-5 mt-5" ></Toggle>
        </div>
    )
}

export default MenuMobile