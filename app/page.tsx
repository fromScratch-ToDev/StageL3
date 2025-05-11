"use client"

import Button from "@/components/Button/Button";
import Carousel from "@/components/Carousel/Carousel";
import Loader from "@/components/Loader/Loader";
import H2 from "@/components/Text/H2";
import P from "@/components/Text/P";
import { GaleriesContext, LangContext, TableauxContext } from "@/context/Context";
import { EmblaOptionsType } from 'embla-carousel';
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

type Slide = {
  nom_fr? : string,
  nom_en? : string,
  path : string,
  redirect? : string,
}

export default function Accueil() {

  const OPTIONS: EmblaOptionsType = { dragFree: true }
  const lang = useContext(LangContext);
  const galeries = useContext(GaleriesContext);
  const tableaux = useContext(TableauxContext);
  const [slides, set_slides] = useState<Slide[]>([]);     

  useEffect(() => {
      const new_slides : Slide[] = galeries.filter(galerie => tableaux.find((tableau) => tableau.laGalerieId === galerie.nom_fr) !== undefined)
        .map((galerie)=> {
          const nom_fr = galerie.nom_fr;
          const nom_en = galerie.nom_en;
          const tableau = tableaux.find(tableau => tableau.laGalerieId === nom_fr)
          const slide : Slide = {
            nom_fr,
            nom_en,
            path : tableau ? tableau.imagePath : "",
            redirect : `/galerie?nom=${nom_fr}`
          }
        return slide
      })
      set_slides(new_slides); 
    
    }, [lang, galeries, tableaux]);

  if (galeries.length === 0 || tableaux.length === 0) {
    return <Loader></Loader>
  }

  return (
    <>
      <H2 text_fr="Découvrez les galeries" text_en="Discover the galleries"></H2>
      <Carousel slides={slides} options={OPTIONS} className=" md:w-[25vw] 2xl:w-[20vw] aspect-2/3 min-h-[40vh] md:min-h-auto border-black border-1"></Carousel>
      <section className="flex flex-col md:flex-row w-full">
        <div className="flex-1">
          <H2 text_fr="Expositions" text_en="Exhibitions"></H2>
          <P className="text-justify" text_fr={`Cette page ouvre sur l’exposition rétrospective que j'ai pu faire grâce à Bertrand de Viviès, alors conservateur des musées et du patrimoine de Gaillac ; cette rétrospective s’est tenue dans le musée des Beaux-arts situé dans le château de Foucaud. 

            Elle se poursuit sur le récapitulatif de mes expositions en France et aux États-Unis. Pour ces dernières, c’est à Scott Deroy que je dois d’avoir eu la joie d’exposer à los Angeles, à San Francisco, et à San Diego (Californie). Cette page se termine sur quelques articles de presse.`}      
            text_en={`This page opens with the retrospective exhibition I was able to present thanks to Bertrand de Viviès, who was then the curator of museums and heritage in Gaillac. The exhibition was held at the Fine Arts Museum located in the Château de Foucaud.
              It continues with an overview of my exhibitions in France and the United States. As for the latter, I owe it to Scott Deroy that I had the joy of exhibiting in Los Angeles, San Francisco, and San Diego (California).
              The page concludes with a selection of press articles.`
            }></P>
          <Link href="/expositions" className="block w-max rounded-3xl ">
            <Button text_fr="Découvrir" text_en="Discover" className="mt-6 md:mt-12" ></Button>
          </Link>
        </div>
        <div className="flex-1 relative items-center justify-center mt-16 mx-16 hidden md:block">
          <Image className="border-1 border-black object-cover object-right" src={"/images/exposition_gaillac.jpg"} fill alt="François Malespine à l'exposition de Gaillac"></Image>
        </div>
      </section>
    </>
  )

}