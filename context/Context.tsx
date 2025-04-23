"use client"

import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from 'react';

// Context pour la langue
type LangContext = {
    lang : string,
    set_lang : Dispatch<SetStateAction<string>>
}

export const LangContext = createContext<string>("FR");

export const SetLangContext = createContext<Dispatch<SetStateAction<string>>>(() => {});


export const LangProvider = (props : PropsWithChildren) =>{
    const [lang, set_lang] = useState(useContext(LangContext));
    const children = props.children;

    return(
        <SetLangContext.Provider value = {set_lang}>
            <LangContext.Provider value = {lang}>
            {children}
            </LangContext.Provider>
        </SetLangContext.Provider>
    );
}


// Context pour les galeries
export type Galerie = {
    nom_fr: string,
    nom_en: string,
    presentation_fr : string,
    presentation_en : string
};

type GaleriesContext = {
    galeries: Galerie[];
    set_galeries: Dispatch<SetStateAction<Galerie[]>>;
};

export const GaleriesContext = createContext<Galerie[]>([]);

export const SetGaleriesContext = createContext<Dispatch<SetStateAction<Galerie[]>>>(() => {});


export const GaleriesProvider = (props : PropsWithChildren) =>{
    const [galeries, set_galeries] = useState<Galerie[]>([]);
    const children = props.children;

    useEffect(() => {

        const fetchGaleries = async () => {
            const res = await fetch(`/api/galeries`);
            if (!res.ok) throw new Error('Erreur lors de la récupération des noms des galeries');
            const data = await res.json();
            set_galeries(data);
        };
        
        fetchGaleries();
    }, []);

    return(
        <SetGaleriesContext.Provider value = {set_galeries}>
            <GaleriesContext.Provider value = {galeries}>
            {children}
            </GaleriesContext.Provider>
        </SetGaleriesContext.Provider>
    );
}


// contexte pour les tableaux
type Tableau = {
    id: number,
    imagePath: string,
    description_fr: string,
    description_en: string,
    laGalerieId: string
}

type TableauxContext = {
    tableaux : Tableau[],
    set_tableaux : Dispatch<SetStateAction<Tableau[]>>;
};

export const TableauxContext = createContext<Tableau[]>([]);

export const SetTableauxContext = createContext<Dispatch<SetStateAction<Tableau[]>>>(() => {});

export const TableauxProvider = (props : PropsWithChildren)=>{

    const [tableaux , setTableaux] = useState<Tableau[]>([]);
    const children = props.children;
    
    useEffect(() => {        
        const fetchTableaux = async () => {
            const res = await fetch(`/api/tableaux`);
            if (!res.ok) throw new Error('Erreur lors de la récupération des tableaux');
            const data = await res.json();
            
            setTableaux(data);
        };
        fetchTableaux();
    }, []);
    
    return(
        <SetTableauxContext value={setTableaux}>
            <TableauxContext value={tableaux}>
                {children}
            </TableauxContext>
        </SetTableauxContext>
    )
}