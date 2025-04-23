"use client"

import { GaleriesContext, LangContext } from "@/context/Context";
import Link from "next/link";
import { useContext, useState } from "react";
import P from "../Text/P";


export default function Menu(){
    const [afficher_sous_menu, set_afficher_sous_menu] = useState(false); 
    const lang = useContext(LangContext);
    const galeries = useContext(GaleriesContext);
    
    return(  
    <nav className="flex flex-row gap-5 text-2xl h-full">
        <Link href="/">{lang === "FR" ? "Accueil" : "Home"}</Link>
        
        <div className="w-22 z-1 h-0 overflow-visible" onMouseEnter={() => set_afficher_sous_menu(true)} onMouseLeave={() => set_afficher_sous_menu(false)}>
        {lang === "FR" ? "Galeries" : "Galleries"}
            {afficher_sous_menu && 
            <ul className="flex flex-col text-base w-max bg-primary  ">
                {galeries.map((nom_galerie) => (
                    <Link className="border-t-2" key={nom_galerie.nom_fr} href={`/galerie?nom=${nom_galerie.nom_fr}`}><P text_fr={nom_galerie.nom_fr} text_en={nom_galerie.nom_en}></P></Link>
                ))}
            </ul>} 
        </div>    
        
        <Link href="/expositions">{lang === "FR" ? "Expositions" : "Exhibitions"}</Link>
        <Link href="/biographie">{lang === "FR" ? "Biographie" : "Biography"}</Link>
        <Link href="/contact">{lang === "FR" ? "Contact" : "Contact"}</Link>
    </nav>
    )
}