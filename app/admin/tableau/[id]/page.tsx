"use client"
import P from '@/components/Text/P';
import { TableauxContext } from '@/context/Context';
import { useParams, useSearchParams } from 'next/navigation';
import { Suspense, useContext } from 'react';
import TableauForm from '../../TableauForm';
import { useAdminOperations } from '../../hooks';

function EditTableauContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = parseInt(params.id as string);
  const returnGalerie = searchParams.get('galerie');
  const tableaux = useContext(TableauxContext);
  const { saveTableau, isLoading } = useAdminOperations();
  
  const tableau = tableaux.find(t => t.id === id);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (formData: any, imageFile?: File) => {
    if (!tableau) return;
    
    await saveTableau({
      ...formData,
      id: tableau.id,
      imagePath: tableau.imagePath,
      laGalerieId: tableau.laGalerieId,
    }, imageFile, true);
  };

  if (!tableau) {
    return (
      <div className="text-center py-12">
        <P text_fr="Tableau non trouvé" text_en="Painting not found" className="mb-6" />
      </div>
    );
  }

  const backUrl = returnGalerie ? `/admin?nom=${returnGalerie}` : '/admin';

  return (
    <TableauForm
      initialData={{
        description_fr: tableau.description_fr,
        description_en: tableau.description_en,
        imagePath: tableau.imagePath
      }}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      cancelUrl={backUrl}
      title_fr="Modifier le tableau"
      title_en="Edit painting"
      submitLabel_fr="Sauvegarder"
      submitLabel_en="Save"
      showImageUpload={false}
    />
  );
}

export default function AdminEditTableau() {
  return (
    <Suspense>
      <EditTableauContent />
    </Suspense>
  );
}
