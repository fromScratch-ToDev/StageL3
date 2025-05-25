"use client"
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import TableauForm from '../../TableauForm';
import { useAdminOperations } from '../../hooks';

function NewTableauContent() {
  const searchParams = useSearchParams();
  const galerieParam = searchParams.get('galerie');
  const { saveTableau, isLoading } = useAdminOperations();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (formData: any, imageFile?: File) => {
    if (!galerieParam || !imageFile) {
      alert('Galerie et image sont requis');
      return;
    }
    
    await saveTableau({
      ...formData,
      laGalerieId: galerieParam,
    }, imageFile, false);
  };

  const backUrl = galerieParam ? `/admin?nom=${galerieParam}` : '/admin';

  return (
    <TableauForm
      onSubmit={handleSubmit}
      isLoading={isLoading}
      cancelUrl={backUrl}
      title_fr="Ajouter un tableau"
      title_en="Add painting"
      submitLabel_fr="Créer"
      submitLabel_en="Create"
      showImageUpload={true}
    />
  );
}

export default function AdminNewTableau() {
  return (
    <Suspense>
      <NewTableauContent />
    </Suspense>
  );
}
