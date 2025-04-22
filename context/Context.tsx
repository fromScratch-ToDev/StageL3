import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

type LangContext = {
    lang : string,
    set_lang : Dispatch<SetStateAction<string>>
}

export const LangContext = createContext<string>("FR");

export const SetLangContext = createContext<Dispatch<SetStateAction<string>>>(() => {});


export const LangProvider = (props : PropsWithChildren) =>{
    const [lang, set_lang] = useState("FR");
    const children = props.children;

    return(
        <SetLangContext.Provider value = {set_lang}>
            <LangContext.Provider value = {lang}>
            {children}
            </LangContext.Provider>
        </SetLangContext.Provider>
    );
}



type Galerie = {
    nom_fr: string;
    nom_en: string;
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

    return(
        <SetGaleriesContext.Provider value = {set_galeries}>
            <GaleriesContext.Provider value = {galeries}>
            {children}
            </GaleriesContext.Provider>
        </SetGaleriesContext.Provider>
    );
}
