"use client"
import P from '@/components/Text/P';
import { Galerie, GaleriesContext } from '@/context/Context';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

function NavigationGalerie({ currentGalerie, className = '' }: {
  currentGalerie: Galerie | undefined;
  className?: string;
}) {
  const galeries = useContext(GaleriesContext);
  
  if (!currentGalerie) return null;
  
  const currentIndex = galeries.indexOf(currentGalerie);
  const previousGalerie = galeries[(currentIndex - 1 + galeries.length) % galeries.length];
  const nextGalerie = galeries[(currentIndex + 1) % galeries.length];

  return (
    <div className={`flex justify-between my-5 gap-x-10 ${className}`}>
      <Link href={`/admin?nom=${previousGalerie.nom_fr}`} className='flex items-center gap-0.5 md:gap-1.5 cursor-pointer'>
        <Image src="/svg/arrowLeft.svg" width={20} height={20} alt='arrow left' />
        <P text_fr={previousGalerie.nom_fr} text_en={previousGalerie.nom_en} size='sm' />
      </Link>
      <Link href={`/admin?nom=${nextGalerie.nom_fr}`} className='flex items-center gap-0.5 md:gap-1.5 cursor-pointer'>
        <P text_fr={nextGalerie.nom_fr} text_en={nextGalerie.nom_en} size='sm' className='text-right' />
        <Image src="/svg/arrowRight.svg" width={20} height={20} alt='arrow right' />
      </Link>
    </div>
  );
}

export default NavigationGalerie