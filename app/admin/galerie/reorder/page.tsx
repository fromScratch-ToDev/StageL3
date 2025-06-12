"use client"
import Button from '@/components/Button/Button';
import H2 from '@/components/Text/H2';
import P from '@/components/Text/P';
import { GaleriesContext } from '@/context/Context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { useAdminOperations } from '../../hooks';

interface DraggableGalerieItem {
  nom_fr: string;
  nom_en: string;
  order: number;
}

export default function ReorderGaleries() {
  const galeries = useContext(GaleriesContext);
  const { reorderGaleries, isLoading } = useAdminOperations();
  
  const [orderedGaleries, setOrderedGaleries] = useState<DraggableGalerieItem[]>([])
  
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [hasChanges, setHasChanges] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const initialGaleries = galeries.map((galerie, index) => ({
      nom_fr: galerie.nom_fr,
      nom_en: galerie.nom_en,
      order: galerie.order ?? index
    })).sort((a, b) => a.order - b.order);
    
    setOrderedGaleries(initialGaleries);
  }, [galeries]); 

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      return;
    }

    const newOrder = [...orderedGaleries];
    const draggedItem = newOrder[draggedIndex];
    
    // Retirer l'élément de sa position actuelle
    newOrder.splice(draggedIndex, 1);
    // L'insérer à la nouvelle position
    newOrder.splice(dropIndex, 0, draggedItem);
    
    // Mettre à jour les ordres
    const updatedOrder = newOrder.map((galerie, index) => ({
      ...galerie,
      order: index
    }));
    
    setOrderedGaleries(updatedOrder);
    setHasChanges(true);
    setDraggedIndex(null);
  };

  const handleSave = async () => {
    try {
      await reorderGaleries(orderedGaleries.map(g => ({
        nom_fr: g.nom_fr,
        order: g.order
      })));
      setHasChanges(false);
      router.push('/admin');
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  };

  return (
    <div className="space-y-8">
      <div className="rounded-xl shadow-lg p-8 border border-[#e5d3bc]">
        <H2 text_fr="Réorganiser les galeries" text_en="Reorder galleries" className="text-[#381910] mb-8" />
        
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded">
          <P text_fr="💡 Glissez-déposez les galeries pour les réorganiser. L'ordre sera appliqué à la navigation principale." 
             text_en="💡 Drag and drop galleries to reorder them. The order will be applied to the main navigation." 
             className="text-sm text-blue-700" />
        </div>

        <div className="space-y-3 mb-8">
          {orderedGaleries.map((galerie, index) => (
            <div
              key={galerie.nom_fr}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              className={`
                flex items-center justify-between p-4 bg-white border border-[#e5d3bc] rounded-lg cursor-move
                hover:shadow-md transition-shadow duration-200
                ${draggedIndex === index ? 'opacity-50' : ''}
              `}
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 bg-[#7b6752] text-white rounded-full text-sm font-semibold">
                  {index + 1}
                </div>
                <div>
                  <P text_fr={galerie.nom_fr} text_en={galerie.nom_en} className="font-semibold text-[#381910]" />
                </div>
              </div>
              
              <div className="flex flex-col text-right">
                <span className="text-xs text-gray-500">Glisser pour déplacer</span>
                <span className="text-xs text-gray-500">Drag to move</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-2 border-[#e5d3bc]">
          <Link href="/admin" className="flex-1">
            <Button 
              text_fr="Annuler" 
              text_en="Cancel"
              className="bg-[#7b6752] border-[#7b6752] py-3"
              disabled={isLoading}
            />
          </Link>
          
          <Button 
            text_fr={isLoading ? "Sauvegarde..." : "Sauvegarder l'ordre"}
            text_en={isLoading ? "Saving..." : "Save order"}
            handleClick={handleSave}
            className={`py-3 font-semibold ${
              hasChanges 
                ? "bg-[#d1a26a] border-[#d1a26a] text-[#381910]" 
                : "bg-gray-300 border-gray-300 text-gray-500"
            }`}
            disabled={isLoading || !hasChanges}
          />
        </div>
        
        {hasChanges && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <P text_fr="⚠️ Vous avez des modifications non sauvegardées." 
               text_en="⚠️ You have unsaved changes." 
               className="text-sm text-yellow-700" />
          </div>
        )}
      </div>
    </div>
  );
}