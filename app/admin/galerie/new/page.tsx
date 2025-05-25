"use client"
import GalerieForm from '../../GalerieForm';
import { useAdminOperations } from '../../hooks';

export default function AdminNewGalerie() {
  const { saveGalerie, isLoading } = useAdminOperations();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (formData: any) => {
    await saveGalerie(formData, false);
  };

  return (
    <GalerieForm
      onSubmit={handleSubmit}
      isLoading={isLoading}
      cancelUrl="/admin"
      title_fr="Créer une galerie"
      title_en="Create gallery"
      submitLabel_fr="Créer"
      submitLabel_en="Create"
    />
  );
}
