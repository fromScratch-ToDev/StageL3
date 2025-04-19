"use client"

import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
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
  nom : string
  path : string
}

type PropType = {
  slides: Slide[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  return (
    <section className="embla mt-10 border-b-1 border-black">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container gap-10">
          {slides.map((slide) => (
            <Link href={`/galerie?nom=${slide.nom}`} key={slide.nom}>

              <div className="embla__slide aspect-[2/3] w-[25vw] max-w-100  relative" >
                <Image className='object-cover border-black border-1' fill src={slide.path} sizes="(min-width: 1024px) 25vw, 50vw" alt='image de couverture de la galerie'></Image>
              </div>
              <P className='text-center'>{slide.nom}</P>
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
