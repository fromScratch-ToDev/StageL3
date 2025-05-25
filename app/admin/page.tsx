"use client"
import DragDropGallery from '@/components/Admin/DragDropGallery';
import Button from '@/components/Button/Button';
import Loader from '@/components/Loader/Loader';
import H2 from '@/components/Text/H2';
import P from '@/components/Text/P';
import { GaleriesContext, RefreshTableauxContext, TableauxContext } from "@/context/Context";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useContext, useEffect, useState } from 'react';
import NavigationGalerie from './AdminNavigationGalerie';
import TableauZoom from './AdminTableauZoom';
import PopUp from './PopUp';
import { useAdminOperations } from './hooks';

interface Tableau {
  id: number;
  imagePath: string;
  description_fr: string;
  description_en: string;
  order: number;
  laGalerieId: string;
}

function Search() {
  const searchParams = useSearchParams();
  const galeries = useContext(GaleriesContext);
  const allTableaux = useContext(TableauxContext);
  const refreshTableaux = useContext(RefreshTableauxContext);
  const { deleteGalerie, isLoading: operationLoading } = useAdminOperations();
  
  const [zoomedTableauId, setZoomedTableauId] = useState<number | null>(null);
  const [pendingTableaux, setPendingTableaux] = useState<Tableau[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  
  const nom_fr = searchParams.get('nom') || galeries[0]?.nom_fr || '';
  const galerie = galeries.find(g => g.nom_fr === nom_fr);
  const tableaux = allTableaux
    .filter(t => t.laGalerieId === nom_fr)
    .sort((a, b) => a.order - b.order);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleZoom = (id?: number) => {
    setZoomedTableauId(id || null);
    document.body.style.overflow = id ? 'hidden' : '';
  };

  const saveOrder = async () => {
    if (!pendingTableaux.length) return;
    
    setIsSaving(true);
    try {
      const response = await fetch('/api/tableaux/reorder', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          tableaux: pendingTableaux.map(t => ({ id: t.id, order: t.order }))
        }),
      });
      if (!response.ok) throw new Error('Erreur sauvegarde');
      setPendingTableaux([]);
      await refreshTableaux();
    } catch {
      alert('Erreur lors de la sauvegarde');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteGalerie = async () => {
    if (galerie) {
      await deleteGalerie(galerie.nom_fr);
      setShowDeletePopup(false);
    }
  };

  if (zoomedTableauId) {
    return <TableauZoom id={zoomedTableauId} handleClick={() => handleZoom()} />;
  }

  if (!galerie && showLoader) return <Loader />;

  if (!galerie) {
    return (
      <div className="text-center py-12">
        <P text_fr='Aucune galerie trouvée.' text_en='No gallery found.' className="mb-6" />
      </div>
    );
  }

  const hasChanges = pendingTableaux.length > 0;
  const displayTableaux = hasChanges ? pendingTableaux : tableaux;

  return (
    <>
      <PopUp
        isOpen={showDeletePopup}
        onClose={() => setShowDeletePopup(false)}
        onConfirm={handleDeleteGalerie}
        title="Suppression de la galerie"
        message_fr={`Supprimer "${galerie.nom_fr}" ?`}
        message_en={`Delete "${galerie.nom_en}" ?`}
        confirmLabel_fr={operationLoading ? "Suppression..." : "Supprimer"}
        confirmLabel_en={operationLoading ? "Deleting..." : "Delete"}
        cancelLabel_fr="Annuler" 
        cancelLabel_en="Cancel"
      />
      
      <H2 text_fr={`Galerie : ${galerie.nom_fr}`} text_en={`Gallery : ${galerie.nom_en}`} className='pb-5' />
      <P text_fr={galerie.presentation_fr} text_en={galerie.presentation_en} className='text-justify pb-5' />
      
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <Link href="/admin/galerie/new">
          <Button text_fr="Ajouter une galerie" text_en="Add gallery" />
        </Link>
        <Link href="/admin/galerie/reorder">
          <Button text_fr="Modifier l'ordre des galeries" text_en="Reorder galleries" />
        </Link>
        <Link href={`/admin/galerie/${encodeURIComponent(galerie.nom_fr)}`}>
          <Button text_fr='Modifier la galerie' text_en='Edit gallery' />
        </Link>
        <Link href={`/admin/tableau/new?galerie=${encodeURIComponent(galerie.nom_fr)}`}>
          <Button text_fr="Ajouter un tableau" text_en="Add painting" />
        </Link>
        <Button 
          text_fr='Supprimer la galerie' 
          text_en='Delete gallery' 
          handleClick={() => setShowDeletePopup(true)} 
          disabled={operationLoading} 
        />
        
        {hasChanges && (
          <Button 
            text_fr={isSaving ? 'Sauvegarde...' : 'Sauvegarder'}
            text_en={isSaving ? 'Saving...' : 'Save order'}
            handleClick={saveOrder}
            disabled={isSaving}
          />
        )}
      </div>

      <section className='flex flex-col px-5 border-black border-y-1'>
        <NavigationGalerie currentGalerie={galerie} />
        
        {tableaux.length === 0 ? (
          <div className="py-12 text-center">
            <P text_fr="Cette galerie ne contient aucun tableau." text_en="This gallery contains no paintings." className="mb-6" />
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
              <P text_fr="💡 Commencez par ajouter votre premier tableau à cette galerie." 
                 text_en="💡 Start by adding your first painting to this gallery." 
                 className="text-sm text-blue-700" />
            </div>
          </div>
        ) : (
          <>
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded">
              <P text_fr="💡 Glissez-déposez pour réorganiser. Double-cliquez pour agrandir." 
                 text_en="💡 Drag and drop to reorganize. Double-click to zoom." 
                 className="text-sm text-blue-700" />
            </div>
            <DragDropGallery 
              tableaux={displayTableaux}
              onTableauClick={handleZoom}
              onOrderChange={setPendingTableaux}
              hasUnsavedChanges={hasChanges}
            />
          </>
        )}
        
        <NavigationGalerie currentGalerie={galerie} />
      </section>
    </>
  );
}

export default function Galerie() {
  return (
    <Suspense>    
      <Search />
    </Suspense>
  );
}
