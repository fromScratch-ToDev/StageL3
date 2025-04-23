"use client"

import P from '@/components/Text/P';
import { Galerie, GaleriesContext } from '@/context/Context';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

function NavigationGalerie(props : {currentGalerie : Galerie | undefined, className? : string}) {
    const galeries = useContext(GaleriesContext);
    const currentGalerie = props.currentGalerie;
    const previousGalerie = currentGalerie && galeries[(galeries.indexOf(currentGalerie) -1 + galeries.length) % galeries.length];
    const nextGalerie = currentGalerie && galeries[(galeries.indexOf(currentGalerie) +1) % galeries.length];
    const className = props.className;


    return (
        <div className={`flex justify-between my-5 ${className}`}>
            <Link href={`/galerie?nom=${previousGalerie?.nom_fr}`} className='flex items-center gap-1.5 cursor-pointer'>
                <Image src="/svg/arrowLeft.svg" width={20} height={20} alt='arrow left'></Image>
                <P text_fr={previousGalerie && previousGalerie.nom_fr} text_en={previousGalerie && previousGalerie.nom_en} size='sm'></P>
            </Link>
            <Link href={`/galerie?nom=${nextGalerie?.nom_fr}`} className='flex items-center gap-1.5 cursor-pointer'>
                <P text_fr={nextGalerie && nextGalerie.nom_fr} text_en={nextGalerie && nextGalerie.nom_en} size='sm'></P>
                <Image src="/svg/arrowRight.svg" width={20} height={20} alt='arrow right'></Image>
            </Link>
        </div>
    )
}

export default NavigationGalerie