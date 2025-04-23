"use client"

import Button from '@/components/Button/Button';
import Loader from "@/components/Loader/Loader";
import P from '@/components/Text/P';
import { TableauxContext } from '@/context/Context';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from "next/navigation";
import { useContext } from 'react';
import ArrowTurnUpLeft from '../../../public/svg/ArrowTurnUpLeft';

function TableauZoom() {
    const id = Number(useParams().id_tableau);
    const tableau = useContext(TableauxContext).find(tableau => tableau.id === id) ?? "";

  if (tableau) {
    return (
      <div className="h-screen w-screen p-2.5 flex flex-col items-center">
        <Link className='z-1 absolute left-2.5 top-2.5 rounded-3xl' href={`/galerie?nom=${tableau.laGalerieId}`}>
          <Button text_fr='Retourner à la galerie' text_en='Go back to the gallery'  svg={<ArrowTurnUpLeft/>}></Button>
        </Link>
        <div className='relative h-full w-full'>
          <Image className='object-contain' src={tableau.imagePath} fill alt={`zoom de l'image du tableau n°${id}`}></Image>
        </div>
        <div className='w-screen h-10 flex items-center justify-center'>
          <P text_fr={tableau.description_fr} text_en={tableau.description_en} ></P>
        </div>
      </div>
    )
  } else{
    return(
      <Loader></Loader>
    )
  }
}

export default TableauZoom