"use client"

import H2 from '@/components/Text/H2';
import P from '@/components/Text/P';
import { GaleriesContext, TableauxContext } from "@/context/Context";
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useContext } from 'react';
import NavigationGalerie from './NavigationGalerie';


export default function Galerie() {
  const searchParams = useSearchParams();
  const nom_fr = searchParams.get('nom');
  const currentGalerie = useContext(GaleriesContext).find(galerie => galerie.nom_fr === nom_fr);
  const tableaux = useContext(TableauxContext).filter(tableau => tableau.laGalerieId === nom_fr);

  return (
    <>    
      <H2 text_fr={"Galerie : "+nom_fr} text_en={"Gallery : "+currentGalerie?.nom_en} className='pb-5'></H2>
      <P text_fr={currentGalerie?.presentation_fr} text_en={currentGalerie?.presentation_en} className='text-justify pb-5'></P>
      <section className='flex flex-col px-5 border-black border-y-1'>
        <NavigationGalerie currentGalerie={currentGalerie}/>
        {tableaux.length === 0 ? (
          <P text_fr='Aucun tableau trouvé.' text_en='No table found.'></P>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {tableaux.map((tableau) => (
              <Link href={`/galerie/${tableau.id}`} key={tableau.id} className="aspect-square relative bg-black/20">
                <Image
                  src={tableau.imagePath}
                  alt={`Image ${tableau.id}`}
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                  />
              </Link >
            ))}
          </div>
        )}
        <NavigationGalerie currentGalerie={currentGalerie}/>
      </section>
    </>
  );
}
