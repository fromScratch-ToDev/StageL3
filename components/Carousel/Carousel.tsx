"use client"

import { GaleriesContext, LangContext, TableauxContext } from '@/context/Context'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import P from '../Text/P'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './CarouselArrowButtons'
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay
} from './CarouselSelectedSnapDisplay'

type Slide = {
  nom_fr : string,
  nom_en : string,
  path : string
}

type PropType = {
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { options } = props
  
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)


  const [slides, set_slides] = useState<Slide[]>([]);     
  const lang = useContext(LangContext);
  const galeries = useContext(GaleriesContext);
  const tableaux = useContext(TableauxContext);


  useEffect(() => {
    

      const new_slides : Slide[] = galeries.filter(galerie => tableaux.find((tableau) => tableau.laGalerieId === galerie.nom_fr) !== undefined)
        .map((galerie)=> {
          const nom_fr = galerie.nom_fr;
          const nom_en = galerie.nom_en;
          const tableau = tableaux.find(tableau => tableau.laGalerieId === nom_fr)
          const slide : Slide = {
            nom_fr,
            nom_en,
            path : tableau ? tableau.imagePath : "" 
          }
        return slide
      })
      set_slides(new_slides); 
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang]);

  return (
    <section className="embla mt-10 border-b-1 border-black">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container gap-10">
          {slides.map((slide ) => (  
            <Link href={`/galerie?nom=${slide.nom_fr}`} key={slide.nom_fr}>
              <div className="embla__slide aspect-[2/3] w-[25vw] max-w-100  relative" >
                <Image className='object-cover border-black border-1' fill src={slide.path} sizes="(min-width: 1024px) 25vw, 50vw" alt='image de couverture de la galerie'></Image>
              </div>
              <P className='text-center' text_fr={slide.nom_fr} text_en={slide.nom_en}></P>
            </Link>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </section>
  )
}

export default Carousel
