"use client"

import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
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
import { CalendarDaysIcon } from 'lucide-react'

type Slide = {
  nom_fr? : string,
  nom_en? : string,
  path : string | StaticImageData, 
  redirect? : string,
  aspect? : string
}

type PropType = {
  slides : Slide[],
  options?: EmblaOptionsType,
  className? : string
}

const Carousel: React.FC<PropType> = (props) => {
  const {slides, options, className} = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)
  const [isMouseDown, setIsMouseDown] = useState(false);


  return (
    <section className="embla  border-b-1 border-black">
     
      <div className={`embla__viewport ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'}`} ref={emblaRef}>
        <div className={`embla__container gap-5 md:gap-10`} onMouseDown={() => setIsMouseDown(true)} onMouseUp={() => setIsMouseDown(false)} onMouseLeave={() => setIsMouseDown(false)}>
          {slides.map((slide, index) => {
            const key = slide.path.toString() + index;
            const content = (
              <>
                <div
                  style={{ aspectRatio: `${slide.aspect}` }}
                  className={`embla__slide ${className} aspect-${slide.aspect}`}
                >
                  <Image
                    className={` object-cover`}
                    fill
                    src={slide.path}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    alt="image de couverture de la galerie"
                  />
                </div>
                <P
                  className="text-center cursor-pointer inline-block"
                  text_fr={slide.nom_fr}
                  text_en={slide.nom_en}
                />
              </>
            );

            return slide.redirect ? (
                <Link href={slide.redirect} key={key} className={`flex flex-col items-center ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'}`}> 
                {content}
                </Link>
            ) : (
              <div key={key}>{content}</div>
            );
          })}
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