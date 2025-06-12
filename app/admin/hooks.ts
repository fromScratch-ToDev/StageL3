import { RefreshGaleriesContext, RefreshTableauxContext } from '@/context/Context';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

interface GalerieData {
  nom_fr: string;
  nom_en: string;
  presentation_fr: string;
  presentation_en: string;
  nom_fr_original?: string;
}

interface TableauData {
  id?: number;
  description_fr: string;
  description_en: string;
  imagePath?: string;
  laGalerieId?: string;
}

export function useAdminOperations() {
  const [isLoading, setIsLoading] = useState(false);
  const refreshGaleries = useContext(RefreshGaleriesContext);
  const refreshTableaux = useContext(RefreshTableauxContext);
  const router = useRouter();

  const handleApiCall = async (
    url: string, 
    method: string, 
    data?: GalerieData | TableauData | Record<string, unknown>, 
    onSuccess?: () => void
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: data ? JSON.stringify(data) : undefined,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur lors de l\'opération');
      }
      
      onSuccess?.();
      return await response.json();
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Erreur inconnue';
      alert(message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const saveGalerie = async (galerie: GalerieData, isEdit = false) => {
    await handleApiCall(
      '/api/galeries',
      isEdit ? 'PUT' : 'POST',
      galerie,
      async () => {
        await refreshGaleries();
        router.push(`/admin?nom=${encodeURIComponent(galerie.nom_fr)}`);
      }
    );
  };

  const deleteGalerie = async (nom_fr: string) => {
    await handleApiCall(
      '/api/galeries',
      'DELETE',
      { nom_fr },
      async () => {
        await refreshGaleries();
        router.push('/admin');
      }
    );
  };

  const saveTableau = async (tableau: TableauData, imageFile?: File, isEdit = false) => {
    let imagePath = tableau.imagePath;
    
    // Upload d'image si nécessaire
    if (imageFile) {
      const formData = new FormData();
      formData.append('file', imageFile);
      if (tableau.laGalerieId) {
        formData.append('galerieNom', tableau.laGalerieId);
      }
      
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        throw new Error(errorData.error || 'Erreur lors de l\'upload de l\'image');
      }
      
      const uploadResult = await uploadResponse.json();
      imagePath = uploadResult.imagePath;
    }

    await handleApiCall(
      '/api/tableaux',
      isEdit ? 'PUT' : 'POST',
      { ...tableau, imagePath },
      async () => {
        await refreshTableaux();
        const redirectUrl = tableau.laGalerieId ? `/admin?nom=${tableau.laGalerieId}` : '/admin';
        router.push(redirectUrl);
      }
    );
  };

  const deleteTableau = async (id: number, galerieId?: string) => {
    await handleApiCall(
      '/api/tableaux',
      'DELETE',
      { id },
      async () => {
        await refreshTableaux();
        const redirectUrl = galerieId ? `/admin?nom=${galerieId}` : '/admin';
        router.push(redirectUrl);
      }
    );
  };

  const reorderGaleries = async (galeries: Array<{ nom_fr: string; order: number }>) => {
    await handleApiCall(
      '/api/galeries/reorder',
      'PATCH',
      { galeries },
      async () => {
        await refreshGaleries();
      }
    );
  };

  return {
    isLoading,
    saveGalerie,
    deleteGalerie,
    saveTableau,
    deleteTableau,
    reorderGaleries,
  };
}