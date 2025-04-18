import Header from "@/components/Header/page";
import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function Accueil() {
  const galeries = await prisma.galerie.findMany();

  return (
    <section className="flex flex-col gap-5 w-full pt-6 pr-12 pl-12 min-h-screen max-h-screen">
        <Header isAccueil={true}></Header>
        <div className=" flex-grow relative">
          <Image className="object-cover  rounded-2xl" layout="fill"  src="/images/page_accueil.jpg" alt="image d'accueil du site étant une peinture de l'artiste"></Image>
        </div>
        <div className="flex justify-center items-center ">
          <h1 className="titled-border text-tertiary font-poppins text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center inline-block border-b-2">
            Espaces Intérieurs
          </h1>
        </div>
    </section>
  )

}