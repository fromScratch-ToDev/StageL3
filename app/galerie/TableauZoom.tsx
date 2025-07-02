"use client"

import Button from '@/components/Button/Button';
import Loader from '@/components/Loader/Loader';
import P from '@/components/Text/P';
import { TableauxContext, LangContext } from '@/context/Context';
import Close from '@/public/svg/Close';
import Image from 'next/image';
import { useContext, useState, useEffect } from 'react';
import ArrowTurnUpLeft from '../../public/svg/ArrowTurnUpLeft';

function TableauZoom(props : {handleClick : ()=>void, id : number}) {
  const id = props.id;
  const tableau = useContext(TableauxContext).find(tableau => tableau.id === id);
  const handleClick = props.handleClick;
  const [loading, setLoading] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const lang = useContext(LangContext);

  useEffect(() => {
    if (!loading && !hasInteracted) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [loading, hasInteracted]);

  function handleWheel(e: React.WheelEvent<HTMLImageElement>) {
    e.preventDefault();
    
    if (!hasInteracted) {
      setHasInteracted(true);
      setShowTooltip(false);
    }
    
    const element = e.currentTarget;
    const currentTransform = element.style.transform || '';
    
    // Extraire le scale actuel s'il existe
    const scaleMatch = currentTransform.match(/scale\(([^)]+)\)/);
    const currentScale = scaleMatch ? parseFloat(scaleMatch[1]) : 1;
    
    // Calculer le nouveau scale
    const newScale = e.deltaY > 0 
      ? Math.max(currentScale * 0.9, 1)  // Zoom out
      : Math.min(currentScale * 1.1, 5); // Zoom in
    
    // Remplacer ou ajouter le scale dans le transform existant
    if (scaleMatch) {
      element.style.transform = currentTransform.replace(/scale\([^)]+\)/, `scale(${newScale})`);
    } else {
      element.style.transform = `${currentTransform} scale(${newScale})`;
    }
  }

  /**
   * Gère les événements de clic de souris pour activer la fonctionnalité de glissement d'une image.
   * Capture la position initiale de la souris et applique des transformations de translation
   * en temps réel basées sur le mouvement de la souris jusqu'au relâchement du bouton.
   * 
   * @param e - L'événement de clic contenant l'élément image cible et les coordonnées initiales
   */
  function handleMouseDown(e: React.MouseEvent<HTMLImageElement>) {
    e.preventDefault();

    if (!hasInteracted) {
      setHasInteracted(true);
      setShowTooltip(false);
    }

    const startX = e.clientX;
    const startY = e.clientY;
    const element = e.currentTarget;
    const initialTransform = element.style.transform || '';
    
    // Extraire le scale actuel pour adapter la translation
    const scaleMatch = initialTransform.match(/scale\(([^)]+)\)/);
    const currentScale = scaleMatch ? parseFloat(scaleMatch[1]) : 1;
    
    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = (moveEvent.clientX - startX) / currentScale;
      const deltaY = (moveEvent.clientY - startY) / currentScale;
      
      element.style.transform = `${initialTransform} translate(${deltaX}px, ${deltaY}px)`;
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }

  if (tableau) { //typescript dit tableau potentiellement undefined 
    return (
      <div className=" fixed inset-0 bg-primary z-10 h-dvh w-screen p-2.5 flex flex-col items-center">
      <Button handleClick={handleClick} text_fr='Retourner à la galerie' text_en='Go back to the gallery' className='z-1 hidden md:flex absolute left-2.5 top-2.5' svg={<ArrowTurnUpLeft/>}></Button>
      <Close handleClick={handleClick} className="absolute md:hidden right-1.5 top-1.5 cursor-pointer"></Close>
      <div className='relative h-full w-full'>
        {loading && <Loader/>} 
        <Image 
          className='object-contain cursor-move' 
          src={tableau.imagePath} 
          fill 
          alt={`zoom de l'image du tableau n°${id}`} 
          onLoadingComplete={() => setLoading(false)}
          onWheel={(e) => handleWheel(e)}
          onMouseDown={(e) => handleMouseDown(e)} />
        
        {showTooltip && (
          <div className="hidden lg:block absolute bottom-4 right-4 bg-secondary text-primary p-4 rounded-lg z-20 max-w-sm text-center border border-primary">
            <div className="text-base">
              {lang === 'EN' ? (
                <>
                  <p className="mb-2">💡 <strong>How to interact:</strong></p>
                  <p className="mb-1">🖱️ <strong>Zoom:</strong> Use mouse wheel</p>
                  <p>✋ <strong>Move:</strong> Click and drag</p>
                </>
              ) : (
                <>
                  <p className="mb-2">💡 <strong>Comment interagir :</strong></p>
                  <p className="mb-1">🖱️ <strong>Zoomer :</strong> Utilisez la molette</p>
                  <p>✋ <strong>Déplacer :</strong> Cliquez et faites glisser</p>
                </>
              )}
            </div>
            <button 
              onClick={() => setShowTooltip(false)}
              className="mt-3 text-sm opacity-70 hover:opacity-100 cursor-pointer"
            >
              {lang === 'EN' ? 'Got it!' : 'Compris !'}
            </button>
          </div>
        )}
      </div>
      {!loading && 
      <div className='w-screen h-10 flex items-center justify-center'>
        <P text_fr={tableau.description_fr} text_en={tableau.description_en} ></P>
      </div>
      }
    </div>
  )
}
}

export default TableauZoom