"use client"

import Button from '@/components/Button/Button';
import P from '@/components/Text/P';
import { TableauxContext } from '@/context/Context';
import Image from 'next/image';
import { useContext } from 'react';
import ArrowTurnUpLeft from '../../public/svg/ArrowTurnUpLeft';

function TableauZoom(props : {handleClick : ()=>void, id : number}) {
  const id = props.id;
  const tableau = useContext(TableauxContext).find(tableau => tableau.id === id);
  const handleClick = props.handleClick;

  if (tableau) {
    return (
      <div className=" fixed inset-0 bg-primary z-10 h-dvh w-screen p-2.5 flex flex-col items-center">
        <Button handleClick={handleClick} text_fr='Retourner à la galerie' text_en='Go back to the gallery' className='z-1 absolute left-2.5 top-2.5' svg={<ArrowTurnUpLeft/>}></Button>
        <div className='relative h-full w-full'>
          <Image className='object-contain' src={tableau.imagePath} fill alt={`zoom de l'image du tableau n°${id}`}></Image>
        </div>
        <div className='w-screen h-10 flex items-center justify-center'>
          <P text_fr={tableau.description_fr} text_en={tableau.description_en} ></P>
        </div>
      </div>
    )
  }
}

export default TableauZoom