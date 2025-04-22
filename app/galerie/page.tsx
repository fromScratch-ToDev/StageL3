"use client"

import MainSection from '@/components/Boxes/MainSection';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import H2 from '@/components/Text/H2';
import P from '@/components/Text/P';
import { LangContext, LangProvider } from "@/context/Context";
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';


type tableau = {
    id: number,
    imagePath: string,
    description_fr: string,
    description_en: string,
    laGalerieId: string
}

export default function Galerie() {
  const searchParams = useSearchParams();
  const nom_fr = searchParams.get('nom');
  const nom_en = localStorage.getItem("nom_en");
  
  const [tableaux , setTableaux] = useState<tableau[]>([]);
  const lang = useContext(LangContext);
  console.log(nom_en, lang==="FR");

  useEffect(() => {
    if (!nom_fr) return;

    const fetchTableaux = async () => {
        const res = await fetch(`/api/tableaux?nom=${encodeURIComponent(nom_fr)}`);
        if (!res.ok) throw new Error('Erreur lors de la récupération des tableaux');
        const data = await res.json();
        
        setTableaux(data);
    };

    fetchTableaux();
  }, [nom_fr]);


  return (
    <LangProvider>
      <Header></Header>

      <MainSection>
        <H2 text_fr={"Galerie : "+nom_fr} text_en={"Gallery : "+nom_en}></H2>
        <section className='flex flex-col'>
          {tableaux.length === 0 ? (
            <P text_fr='Aucun tableau trouvé.' text_en='No table found.'></P>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full ">
              {tableaux.map((tableau) => (
                <div key={tableau.id} className="aspect-square relative bg-black/20">
                  <Image
                    src={tableau.imagePath}
                    alt={`Image ${tableau.id}`}
                    width={400}
                    height={400}
                    className="object-contain w-full h-full"
                    />
                </div>
              ))}
            </div>
          )}
        </section>
      </MainSection>
      <Footer></Footer>
    </LangProvider>
  );
}
