"use client"
import P from '@/components/Text/P';
import { GaleriesContext } from '@/context/Context';
import { useParams } from 'next/navigation';
import { useContext } from 'react';
import GalerieForm from '../../GalerieForm';
import { useAdminOperations } from '../../hooks';

export default function AdminEditGalerie() {
  const params = useParams();
  const nom = decodeURIComponent(params.nom as string);
  const galeries = useContext(GaleriesContext);
  const { saveGalerie, isLoading } = useAdminOperations();
  
  const currentGalerie = galeries.find(g => g.nom_fr === nom);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (formData: any) => {
    await saveGalerie({
      ...formData,
      nom_fr_original: currentGalerie?.nom_fr
    }, true);
  };

  if (!currentGalerie) {
    return (
      <div className="text-center py-12">
        <P text_fr="Galerie non trouvée" text_en="Gallery not found" className="mb-6" />
      </div>
    );
  }

  return (
    <GalerieForm
      initialData={currentGalerie}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      cancelUrl={`/admin?nom=${currentGalerie.nom_fr}`}
      title_fr="Modifier la galerie"
      title_en="Edit gallery"
      submitLabel_fr="Sauvegarder"
      submitLabel_en="Save"
    />
  );
}
