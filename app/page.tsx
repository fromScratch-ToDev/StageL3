import prisma from "@/lib/prisma";
import Image from 'next/image';

export default async function Accueil() {
  const galeries = await prisma.galerie.findMany();

  return (
    <Image 
    src="/images/monotypes/m1.jpg" 
    fill
    style={{ objectFit: "contain" }}
    alt="Picture of the author"
    className="bg-primary"
    />
  )

}