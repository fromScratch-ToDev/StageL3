"use client"
import Carousel from "@/components/Carousel/Carousel"
import H2 from "@/components/Text/H2"
import H3 from "@/components/Text/H3"
import P from "@/components/Text/P"
import e05 from "@/public/images/exposition_gaillac/exposition-05.jpg"
import e06 from "@/public/images/exposition_gaillac/exposition-06.jpg"
import e07 from "@/public/images/exposition_gaillac/exposition-07.jpg"
import { EmblaOptionsType } from "embla-carousel"
import Image, { StaticImageData } from "next/image"

type Slide = {
  nom_fr? : string,
  nom_en? : string,
  path : string | StaticImageData ,
  redirect? : string,
  aspect? : string,
}


function Expositions() {
  const OPTIONS: EmblaOptionsType = { dragFree: true }
  const slides1 : Slide[] = [{path : e05, aspect : e05.width.toString()+"/"+e05.height.toString()},
                            {path : e06, aspect : e06.width.toString()+"/"+e06.height.toString()},
                            {path : e07, aspect : e07.width.toString()+"/"+e07.height.toString()}]  
  
  return (
    <>
      <H2 text_fr="Expositions" text_en="Exhibitions" className=" text-center"></H2>
      <H3 text_fr={`Rétrospective - Musée de Gaillac`} text_en={"Retrospective – Gaillac Museum"}></H3>
      <div className="grid grid-cols-1 md:grid-cols-2 h-svh md:h-[50svh] gap-5 ">
        <div className="relative">
          <Image className="object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-01.jpg'} fill alt="affiche de l'exposition"></Image>
        </div>
        <div className="relative">
          <Image className="object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-02.jpg'} fill alt="affiche de l'exposition"></Image>
        </div>
      </div>
      <H3 text_fr="Peinture à l'oeuf et dorure à la feuille" text_en="Egg tempera painting and gold leaf gilding" className="mt-5"></H3>
      <P text_fr="En 1969 j'apprends avec mon père Claude Malespine la peinture à l'oeuf, la dorure à la feuille, le travail de l'or"
      text_en="In 1969, I learned egg tempera painting, gold leaf gilding, and gold craftsmanship from my father, Claude Malespine."></P>
      <div className="grid grid-cols-1 md:grid-cols-2 h-svh md:h-[50svh] gap-5 mt-3 ">
        <div className="relative">
          <Image className="object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-03.jpg'} fill alt="affiche de l'exposition"></Image>
        </div>
        <div className="relative">
          <Image className="object-contain bg-black/20" src={'/images/exposition_gaillac/exposition-04.jpg'} fill alt="affiche de l'exposition"></Image>
        </div>
      </div>
      <H3 text_fr='Encre de chine "Marseille / Luminy"' text_en='India Ink "Marseille / Luminy' className="mt-5"></H3>
      <Carousel slides={slides1} options={OPTIONS} className="h-[30vh] md:h-[40vh] w-auto object-contain "></Carousel>
    </>
  )
}

export default Expositions