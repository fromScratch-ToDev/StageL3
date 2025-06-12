"use client"
import Button from '@/components/Button/Button';
import Loader from '@/components/Loader/Loader';
import P from '@/components/Text/P';
import { TableauxContext } from '@/context/Context';
import Close from '@/public/svg/Close';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useContext, useState } from 'react';
import ArrowTurnUpLeft from '../../public/svg/ArrowTurnUpLeft';
import PopUp from './PopUp';
import { useAdminOperations } from './hooks';

function TableauZoom(props : {handleClick : ()=>void, id : number}) {
  const { id, handleClick } = props;
  const tableau = useContext(TableauxContext).find(tableau => tableau.id === id);
  const { isLoading, deleteTableau } = useAdminOperations();
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const searchParams = useSearchParams();
  const galerie = searchParams?.get('nom');

  const handleDelete = async () => {
    if (tableau) {
      await deleteTableau(tableau.id, galerie || undefined);
      handleClick();
    }
  };

  if (!tableau) return null;

  const editUrl = galerie ? `/admin/tableau/${id}?galerie=${galerie}` : `/admin/tableau/${id}`;
  
  return (
    <>
      <PopUp
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onConfirm={handleDelete}
        title="Suppression du tableau"
        message_fr={`Êtes-vous sûr de vouloir supprimer le tableau ?\nCette action est irréversible.`}
        message_en={`Are you sure you want to delete the painting?\nThis action cannot be undone.`}
        confirmLabel_fr={isLoading ? "Suppression..." : "Supprimer"}
        confirmLabel_en={isLoading ? "Deleting..." : "Delete"}
        cancelLabel_fr="Annuler"
        cancelLabel_en="Cancel"
      />
      
      <div className="fixed inset-0 bg-primary z-10 h-dvh w-screen p-2.5 flex flex-col items-center">
        <Button 
          handleClick={handleClick} 
          text_fr='Retourner à la galerie' 
          text_en='Go back to the gallery' 
          className='z-1 hidden md:flex absolute left-2.5 top-2.5' 
          svg={<ArrowTurnUpLeft/>}
        />
        
        <div className='z-1 absolute right-2.5 top-2.5'>
          <Link href={editUrl}>
            <Button text_fr='Modifier le tableau' text_en='Edit painting' className='z-1' />
          </Link>
          <Button 
            handleClick={() => setShowPopup(true)} 
            text_fr='Supprimer le tableau' 
            text_en='Delete painting' 
            className='z-1 mt-5'
            disabled={isLoading}
          />
        </div>
        
        <Close handleClick={handleClick} className="absolute md:hidden right-1.5 top-1.5 cursor-pointer" />
        
        <div className='relative h-full w-full'>
          {loading && <Loader/>} 
          <Image 
            className='object-contain' 
            src={tableau.imagePath} 
            fill 
            alt={`zoom de l'image du tableau n°${id}`} 
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        
        {!loading && 
          <div className='w-screen h-10 flex items-center justify-center'>
            <P text_fr={tableau.description_fr} text_en={tableau.description_en} />
          </div>
        }
      </div>
    </>
  );
}

export default TableauZoom