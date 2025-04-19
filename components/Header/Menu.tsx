"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Menu(){
    const [afficher_sous_menu, set_afficher_sous_menu] = useState(false); 
    const [nom_galeries , set_nom_galeries] = useState([]);
    
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
        <Link href="/">Accueil</Link>
        
        <div className="w-22 z-1 h-0 overflow-visible" onMouseEnter={() => set_afficher_sous_menu(true)} onMouseLeave={() => set_afficher_sous_menu(false)}>
            Galeries
            {afficher_sous_menu && 
            <ul className="flex flex-col text-base w-max bg-primary  ">
                {nom_galeries.map((nom_galerie) => (
                    <Link className="border-t-2" key={nom_galerie} href={`/galerie?nom=${nom_galerie}`}>{nom_galerie}</Link>
                ))}
            </ul>} 
        </div>    
        
        <Link href="/Expositions">Expositions</Link>
        <Link href="/Biographie">Biographie</Link>
        <Link href="/Contact">Contact</Link>
    </nav>
    )
}