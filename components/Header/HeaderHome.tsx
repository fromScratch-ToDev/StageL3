'use client'

import Image from "next/image";
import { PropsWithChildren, useEffect } from "react";
import H1 from "../Text/H1";

function HeaderHome(props : PropsWithChildren) {
    const children = props.children;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, []);

    return (
        <section className="flex flex-col gap-5 w-full h-svh pb-8 ">
            {children}
            <div className="h-full relative md:mx-12">
                <Image className="object-cover md:rounded-2xl" fill src="/images/page_accueil.jpg" alt="image d'accueil du site étant une peinture de l'artiste"></Image>
            </div>
            <div className="flex justify-center items-center ">
                <H1 text_fr="Espaces Intérieurs" text_en="Inner Spaces"></H1>
            </div>
        </section>
    )
}

export default HeaderHome