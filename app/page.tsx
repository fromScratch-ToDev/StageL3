"use client"

import MainSection from "@/components/Boxes/MainSection";
import Carousel from "@/components/Carousel/Carousel";
import Header from "@/components/Header/Header";
import H2 from "@/components/Text/H2";
import P from "@/components/Text/P";
import { EmblaOptionsType } from 'embla-carousel';
import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  nom : string
  path : string
}

export default function Accueil() {

  const OPTIONS: EmblaOptionsType = { dragFree: true }

  const [slides, set_slides] = useState<Slide[]>([]);     
  const [lang, set_lang] = useState<string>("FR");


  useEffect(() => {
      async function fetchCovers(){
        const res = await fetch(`/api/cover?lang=${lang}`);
        if (res.ok){
          const new_slides = await res.json();
          
          set_slides(new_slides);
        } 
      } 
      fetchCovers();

  }, [lang]);



  return (
    <>
    <section className="flex flex-col gap-5 w-full h-screen pt-6 px-12 ">
        <Header isAccueil={true} set_lang = {set_lang}></Header>
        <div className="h-full relative">
          <Image className="object-cover rounded-2xl" fill src="/images/page_accueil.jpg" alt="image d'accueil du site étant une peinture de l'artiste"></Image>
        </div>
        <div className="flex justify-center items-center h-fit ">
          <h1 className="titled-border text-tertiary font-poppins text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center inline-block border-b-2">
            Espaces Intérieurs
          </h1>
        </div>
    </section>
    <MainSection>
      <H2>Découvrez les galeries</H2>
      <Carousel slides={slides} options={OPTIONS}></Carousel>
      <section className="flex flex-row">
        <div className="flex-1">
          <H2>Expositions</H2>
          <P className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum sem in tellus tincidunt, non condimentum arcu dignissim. Sed lobortis, magna ut pretium dignissim, leo lectus dapibus nulla, ut molestie lectus metus eget elit. Donec rutrum erat placerat, consequat nisl et, aliquam diam. Vestibulum ipsum orci, lacinia sed sollicitudin sollicitudin, mollis vitae tortor. Nulla sed est accumsan, molestie quam vitae, imperdiet eros. Quisque metus justo, maximus fringilla felis in, blandit lobortis augue. Mauris interdum sagittis posuere. Praesent vulputate tellus auctor, elementum leo vitae, tristique sem. In gravida eros sed vestibulum blandit. Etiam ullamcorper fermentum nunc id commodo. </P>
        </div>
        <div className="flex-1 relative items-center justify-center mt-16 mx-16">
          <Image className="border-1 border-black" src={"/images/expos.jpg"} fill alt="François Malespine à l'exposition de Gaillac"></Image>
        </div>
      </section>
    </MainSection>
    </>
  )

}