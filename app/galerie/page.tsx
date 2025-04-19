"use client"

import P from '@/components/Text/P';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';


type tableau = {
    id: number,
    imagePath: string,
    description_fr: string,
    description_en: string,
    laGalerieId: string
}

export default function Galerie() {
  const searchParams = useSearchParams();
  const nom = searchParams.get('nom');

  const [tableaux , setTableaux] = useState<tableau[]>([]);

  useEffect(() => {
    if (!nom) return;

    const fetchTableaux = async () => {
        const res = await fetch(`/api/tableaux?nom=${encodeURIComponent(nom)}`);
        if (!res.ok) throw new Error('Erreur lors de la récupération des tableaux');
        const data = await res.json();
        
        setTableaux(data);
    };

    fetchTableaux();
  }, [nom]);


  return (
    <div>
      <h1>Galerie : {nom}</h1>
      {tableaux.length === 0 ? (
        <P>Aucun tableau trouvé.</P>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {tableaux.map((tableau) => (
            <div key={tableau.id} className="border p-2 rounded shadow">
              <Image
                src={tableau.imagePath}
                alt={`Image ${tableau.id}`}
                width={400}
                height={300}
                className="w-full object-cover"
              />
              {tableau.description_fr && (
                <p className="mt-2 text-sm">{tableau.description_fr}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
