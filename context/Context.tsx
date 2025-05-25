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
    presentation_en : string,
    order: number
};

export const GaleriesContext = createContext<Galerie[]>([]);
export const SetGaleriesContext = createContext<Dispatch<SetStateAction<Galerie[]>>>(() => {});
export const RefreshGaleriesContext = createContext<() => Promise<void>>(async () => {});

export const GaleriesProvider = (props : PropsWithChildren) =>{
    const [galeries, set_galeries] = useState<Galerie[]>([]);
    const children = props.children;

    const fetchGaleries = async () => {
        try {
            const res = await fetch(`/api/galeries`, { cache: 'no-store' });
            if (!res.ok) throw new Error('Erreur lors de la récupération des noms des galeries');
            const data = await res.json();
            set_galeries(data);
        } catch (error) {
            console.error('Erreur lors du chargement des galeries:', error);
        }
    };

    useEffect(() => {
        fetchGaleries();
    }, []);

    return(
        <RefreshGaleriesContext.Provider value={fetchGaleries}>
            <SetGaleriesContext.Provider value = {set_galeries}>
                <GaleriesContext.Provider value = {galeries}>
                {children}
                </GaleriesContext.Provider>
            </SetGaleriesContext.Provider>
        </RefreshGaleriesContext.Provider>
    );
}

// contexte pour les tableaux
type Tableau = {
    id: number,
    imagePath: string,
    description_fr: string,
    description_en: string,
    order: number,
    laGalerieId: string
}

export const TableauxContext = createContext<Tableau[]>([]);
export const SetTableauxContext = createContext<Dispatch<SetStateAction<Tableau[]>>>(() => {});
export const RefreshTableauxContext = createContext<() => Promise<void>>(async () => {});

export const TableauxProvider = (props : PropsWithChildren)=>{
    const [tableaux , setTableaux] = useState<Tableau[]>([]);
    const children = props.children;
    
    const fetchTableaux = async () => {
        try {
            const res = await fetch(`/api/tableaux`, { cache: 'no-store' });
            if (!res.ok) throw new Error('Erreur lors de la récupération des tableaux');
            const data = await res.json();
            
            setTableaux(data);
        } catch (error) {
            console.error('Erreur lors du chargement des tableaux:', error);
        }
    };

    useEffect(() => {        
        fetchTableaux();
    }, []);
    
    return(
        <RefreshTableauxContext.Provider value={fetchTableaux}>
            <SetTableauxContext.Provider value={setTableaux}>
                <TableauxContext.Provider value={tableaux}>
                    {children}
                </TableauxContext.Provider>
            </SetTableauxContext.Provider>
        </RefreshTableauxContext.Provider>
    )
}