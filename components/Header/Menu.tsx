"use client"

import { GaleriesContext, LangContext } from "@/context/Context";
import Burger from "@/public/svg/Burger";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import P from "../Text/P";
import MenuMobile from "./MenuMobile";
import Toggle from "./Toggle";


export default function Menu(props : {isNotAccueil ?: boolean}){
    const isNotAccueil = props.isNotAccueil
    const [afficher_sous_menu_galeries, set_afficher_sous_menu_galeries] = useState(false); 
    const [afficher_sous_menu_expositions, set_afficher_sous_menu_expositions] = useState(false); 
    const galeries = useContext(GaleriesContext);
    const lang = useContext(LangContext);    
    const [afficherMenu, setAfficherMenu] = useState(false);
    const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

    function handleClick() {
        setAfficherMenu(!afficherMenu);
    }
    
    if (afficherMenu) {
        if (mounted) document.body.style.overflow = 'hidden';
        return(
            <MenuMobile handleClick={handleClick}></MenuMobile>
        )
    } else {
        if (mounted) document.body.style.overflow = '';
        return(  
            <>
            <div className="flex justify-end md:hidden cursor-pointer">
                <div onClick={handleClick}>
                    <Burger></Burger>
                </div>
            </div>

            <div className="hidden md:flex justify-end w-full">
                <nav className="flex justify-between w-full gap-3 text-lg lg:text-xl xl:text-2xl h-full">
                    <Link href="/">{lang === "FR" ? "Accueil" : "Home"}</Link>
                    
                    <div className="z-1  cursor-default " onMouseEnter={() => set_afficher_sous_menu_galeries(true)} onMouseLeave={() => set_afficher_sous_menu_galeries(false)}>
                    {lang === "FR" ? "Galeries" : "Galleries"}
                        {afficher_sous_menu_galeries && 
                        <ul className={`flex flex-col text-base ${isNotAccueil ? "bg-primary-darken" : "bg-primary"} z-10 absolute -translate-x-4 pb-2 shadow-[4px_4px_4px_-2px_rgba(0,0,0,0.1)]`}>
                            {galeries.map((nom_galerie) => (
                                <Link className="px-4 pt-1"  key={nom_galerie.nom_fr} href={`/galerie?nom=${nom_galerie.nom_fr}`}><P text_fr={nom_galerie.nom_fr} text_en={nom_galerie.nom_en}></P></Link>
                            ))}
                        </ul>} 
                    </div>  

                    <div className="z-1  cursor-default " onMouseEnter={() => set_afficher_sous_menu_expositions(true)} onMouseLeave={() => set_afficher_sous_menu_expositions(false)}>
                    {lang === "FR" ? "Expositions" : "Exhibitions"}
                        {afficher_sous_menu_expositions && 
                        <ul className={`flex flex-col text-base ${isNotAccueil ? "bg-primary-darken" : "bg-primary"} z-10 absolute -translate-x-4 pb-2 shadow-[4px_4px_4px_-2px_rgba(0,0,0,0.1)]`}>
                            <Link className="px-4 pt-1" href="/expositions/gaillac"><P text_en="Gaillac" text_fr="Gaillac"></P></Link>
                            <Link className="px-4 pt-1" href="/expositions/los_angeles"><P text_en="Los Angeles" text_fr="Los Angeles"></P></Link>
                        </ul>} 
                    </div>      
                    
                    <Link href="/biographie">{lang === "FR" ? "Biographie" : "Biography"}</Link>
                    <Link href="/contact">{lang === "FR" ? "Contact" : "Contact"}</Link>
                    <Toggle lang={lang}></Toggle>
                </nav>
            </div>
            </>
        )
    }
}