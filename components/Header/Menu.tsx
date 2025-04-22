"use client"

import { LangContext } from "@/context/Context";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import P from "../Text/P";

type NomGalerie = {
    nom_fr : string,
    nom_en : string
}

export default function Menu(){
    const [afficher_sous_menu, set_afficher_sous_menu] = useState(false); 
    const [nom_galeries , set_nom_galeries] = useState<NomGalerie[]>([]);
    const lang = useContext(LangContext);

    useEffect(() => {

    const fetchNomGaleries = async () => {
        const res = await fetch(`/api/galeries`);
        if (!res.ok) throw new Error('Erreur lors de la récupération des noms des galeries');
        const data = await res.json();
        set_nom_galeries(data);
    };

    fetchNomGaleries();
    }, []);
    
    return(  
    <nav className="flex flex-row gap-5 text-2xl h-full">
        <Link href="/">{lang === "FR" ? "Accueil" : "Home"}</Link>
        
        <div className="w-22 z-1 h-0 overflow-visible" onMouseEnter={() => set_afficher_sous_menu(true)} onMouseLeave={() => set_afficher_sous_menu(false)}>
        {lang === "FR" ? "Galeries" : "Galleries"}
            {afficher_sous_menu && 
            <ul className="flex flex-col text-base w-max bg-primary  ">
                {nom_galeries.map((nom_galerie) => (
                    <Link className="border-t-2" key={nom_galerie.nom_fr} href={`/galerie?nom=${nom_galerie.nom_fr}`} onClick={() => localStorage.setItem("nom_en", nom_galerie.nom_en)}><P text_fr={nom_galerie.nom_fr} text_en={nom_galerie.nom_en}></P></Link>
                ))}
            </ul>} 
        </div>    
        
        <Link href="/Expositions">{lang === "FR" ? "Expositions" : "Exhibitions"}</Link>
        <Link href="/Biographie">{lang === "FR" ? "Biographie" : "Biography"}</Link>
        <Link href="/Contact">{lang === "FR" ? "Contact" : "Contact"}</Link>
    </nav>
    )
}