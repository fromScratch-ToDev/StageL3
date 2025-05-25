"use client"
import H2 from '@/components/Text/H2';
import P from '@/components/Text/P';

interface PreviewSectionProps {
  nom_fr: string;
  nom_en: string;
  presentation_fr: string;
  presentation_en: string;
}

export default function PreviewSection({ 
  nom_fr, 
  nom_en, 
  presentation_fr, 
  presentation_en 
}: PreviewSectionProps) {


  return (
    <div className="space-y-6">
      <H2 text_fr="Aperçu" text_en="Preview" className="text-[#381910]" no_padding />
      

      {/* Aperçu de l'en tête de la galerie */}
      <div className="bg-[#7b6752]/10 p-4 rounded border border-[#d1a26a]">
        <P text_fr="En-tête de galerie :" text_en="Gallery header:" className="font-semibold mb-3 text-[#381910]" size="sm" />
        <H2 
          text_fr={nom_fr} 
          text_en={nom_en} 
          className="mb-3 text-[#381910]"
        />
        <P 
          text_fr={presentation_fr} 
          text_en={presentation_en} 
          className="text-justify text-[#381910]"
        />
      </div>

    </div>
  );
}
