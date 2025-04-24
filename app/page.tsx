"use client"

import Button from "@/components/Button/Button";
import Carousel from "@/components/Carousel/Carousel";
import H2 from "@/components/Text/H2";
import P from "@/components/Text/P";
import { EmblaOptionsType } from 'embla-carousel';
import Image from "next/image";
import Link from "next/link";

export default function Accueil() {

  const OPTIONS: EmblaOptionsType = { dragFree: true }

  return (
    <>
      <H2 text_fr="Découvrez les galeries" text_en="Discover the galleries"></H2>
      <Carousel options={OPTIONS}></Carousel>
      <section className="flex flex-row">
        <div className="flex-1">
          <H2 text_fr="Expositions" text_en="Exhibitions"></H2>
          <P className="text-justify" text_fr={`Cette page ouvre sur l’exposition rétrospective que j'ai pu faire grâce à Bertrand de Viviès, alors conservateur des musées et du patrimoine de Gaillac ; cette rétrospective s’est tenue dans le musée des Beaux-arts situé dans le château de Foucaud. 

            Elle se poursuit sur le récapitulatif de mes expositions en France et aux États-Unis. Pour ces dernières, c’est à Scott Deroy que je dois d’avoir eu la joie d’exposer à los Angeles, à San Francisco, et à San Diego (Californie). Cette page se termine sur quelques articles de presse.`}      
            text_en={`This page opens with the retrospective exhibition I was able to present thanks to Bertrand de Viviès, who was then the curator of museums and heritage in Gaillac. The exhibition was held at the Fine Arts Museum located in the Château de Foucaud.
              It continues with an overview of my exhibitions in France and the United States. As for the latter, I owe it to Scott Deroy that I had the joy of exhibiting in Los Angeles, San Francisco, and San Diego (California).
              The page concludes with a selection of press articles.`
            }></P>
          <Link href="/expositions">
            <Button text_fr="Découvrir" text_en="Discover" className="mt-12" ></Button>
          </Link>
        </div>
        <div className="flex-1 relative items-center justify-center mt-16 mx-16">
          <Image className="border-1 border-black object-cover" src={"/images/exposition_gaillac.jpg"} fill alt="François Malespine à l'exposition de Gaillac"></Image>
        </div>
      </section>
    </>
  )

}