"use client"
import {
    closestCenter,
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    rectSortingStrategy,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Image from 'next/image';
import React, { useState } from 'react';

interface Tableau {
  id: number;
  imagePath: string;
  description_fr: string;
  description_en: string;
  order: number;
  laGalerieId: string;
}

interface DragDropGalleryProps {
  tableaux: Tableau[];
  onTableauClick: (id: number) => void;
  onOrderChange: (reorderedTableaux: Tableau[]) => void;
  hasUnsavedChanges: boolean;
}

function SortableItem({ tableau, onTableauClick }: { tableau: Tableau; onTableauClick: (id: number) => void }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: tableau.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="aspect-square relative bg-black/20 cursor-grab active:cursor-grabbing hover:scale-105 transition-transform"
      onDoubleClick={() => onTableauClick(tableau.id)}
    >
      <Image
        src={tableau.imagePath}
        alt={`Image ${tableau.id}`}
        width={400}
        height={400}
        className="object-contain w-full h-full pointer-events-none"
      />
      <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
        {tableau.order + 1}
      </div>
    </div>
  );
}

export default function DragDropGallery({ tableaux, onTableauClick, onOrderChange, hasUnsavedChanges }: DragDropGalleryProps) {
  const [items, setItems] = useState(tableaux);
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Mettre à jour les items quand les tableaux changent
  React.useEffect(() => {
    setItems(tableaux);
  }, [tableaux]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      
      const newItems = arrayMove(items, oldIndex, newIndex);
      
      // Mettre à jour les ordres
      const updatedItems = newItems.map((item, index) => ({
        ...item,
        order: index
      }));
      
      setItems(updatedItems);
      onOrderChange(updatedItems);
    }
  }

  return (
    <div className="relative">
      {hasUnsavedChanges && (
        <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded flex items-center justify-between">
          <span className="text-orange-700 text-sm">
            ⚠️ Modifications non sauvegardées
          </span>
        </div>
      )}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items.map(t => t.id)} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {items.map((tableau) => (
              <SortableItem
                key={tableau.id}
                tableau={tableau}
                onTableauClick={onTableauClick}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}