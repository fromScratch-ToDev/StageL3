"use client"

import Loader from '@/components/Loader/Loader';
import H2 from '@/components/Text/H2';
import P from '@/components/Text/P';
import { GaleriesContext, TableauxContext } from "@/context/Context";
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense, useContext, useEffect, useState } from 'react';
import NavigationGalerie from './NavigationGalerie';
import TableauZoom from './TableauZoom';

export default function Galerie() {
  
  const [isZoomed, setIsZoomed] = useState(false);
  const [idTableau, setIdTabeau] = useState(0);
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  function handleClick(id? : number){
    setIsZoomed(!isZoomed);
    if (mounted) {
      document.body.style.overflow = !isZoomed ? 'hidden': ''
    }
    if (id) {
        setIdTabeau(id);
    }
  }

  /**
   * Composant qui doit être wrapé dans une balise Suspense pour attendre la Promise de useSearchParams
   * 
   * Note du 5/11 : possiblement inutile, essai surement d'utiliser Suspense mais composant client 
   * + loader en fonction de variable tableaux donc fortement possible que ce soit totalement inutile (mais bon prends seulement 3/4 lignes)
   * 
   * @returns Le corps de la page
   */
  function Search() {
    const searchParams = useSearchParams();
    const nom_fr = searchParams.get('nom');
    const currentGalerie = useContext(GaleriesContext).find(galerie => galerie.nom_fr === nom_fr);
    const tableaux = useContext(TableauxContext)
      .filter(tableau => tableau.laGalerieId === nom_fr)
      .sort((a, b) => a.order - b.order);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowMessage(true);
      }, 5000); // 5s

      // si les tableaux se chargent avant 5s, on annule le timeout
      if (tableaux.length > 0) {
        clearTimeout(timeout);
      }

      return () => clearTimeout(timeout);
    }, [tableaux]);


    if (isZoomed) {
      return (
        <TableauZoom id={idTableau} handleClick={handleClick}></TableauZoom>
      )
    }

    return (
      <>
      {(tableaux.length > 0 || showMessage) && 
      <>
        <H2 text_fr={"Galerie : "+nom_fr} text_en={"Gallery : "+currentGalerie?.nom_en} className='pb-5'></H2>
        <P text_fr={currentGalerie?.presentation_fr} text_en={currentGalerie?.presentation_en} className='text-justify pb-5'></P>
      </>
      }
      {tableaux.length === 0 && showMessage ? ( 
        <P text_fr='Aucun tableau trouvé.' text_en='No table found.'></P>
      ) : tableaux.length === 0 && !showMessage ? (
        <Loader></Loader>
      ) : (
      <>
        <section className='flex flex-col px-5 border-black border-y-1'>
          <NavigationGalerie currentGalerie={currentGalerie}/>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {tableaux.map((tableau) => (
              <div onClick={() => handleClick(tableau.id)} key={tableau.id} className="aspect-square relative bg-black/20 cursor-zoom-in">
                <Image
                  src={tableau.imagePath}
                  alt={`Image ${tableau.id}`}
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                  />
              </div >
            ))}
          </div>
          <NavigationGalerie currentGalerie={currentGalerie}/>
        </section>
      </>      
      )}
    </>)
  }

  return (
    <Suspense>    
      <Search></Search>
    </Suspense>
  );
}
