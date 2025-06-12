import PreviewSection from '@/components/Admin/PreviewSection';
import Button from '@/components/Button/Button';
import H2 from '@/components/Text/H2';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface GalerieFormData {
  nom_fr: string;
  nom_en: string;
  presentation_fr: string;
  presentation_en: string;
}

interface GalerieFormProps {
  initialData?: GalerieFormData;
  onSubmit: (data: GalerieFormData) => Promise<void>;
  isLoading: boolean;
  cancelUrl: string;
  title_fr: string;
  title_en: string;
  submitLabel_fr: string;
  submitLabel_en: string;
}

export default function GalerieForm({
  initialData,
  onSubmit,
  isLoading,
  cancelUrl,
  title_fr,
  title_en,
  submitLabel_fr,
  submitLabel_en
}: GalerieFormProps) {
  const [formData, setFormData] = useState<GalerieFormData>({
    nom_fr: '',
    nom_en: '',
    presentation_fr: '',
    presentation_en: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = async () => {
    if (!formData.nom_fr || !formData.nom_en || !formData.presentation_fr || !formData.presentation_en) {
      alert('Tous les champs sont requis');
      return;
    }
    await onSubmit(formData);
  };

  const inputClass = "w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:border-[#7b6752] text-[#381910] bg-transparent transition";

  return (
    <div className="space-y-12">
      <div className="rounded-xl shadow-lg p-8 border border-[#e5d3bc]">
        <H2 text_fr={title_fr} text_en={title_en} className="text-[#381910] mb-8" />
        
        <div className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#381910] mb-2">
              Nom Français <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.nom_fr}
              onChange={(e) => setFormData(prev => ({ ...prev, nom_fr: e.target.value }))}
              className={inputClass}
              placeholder="Nom de la galerie en français"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#381910] mb-2">
              Nom Anglais <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.nom_en}
              onChange={(e) => setFormData(prev => ({ ...prev, nom_en: e.target.value }))}
              className={inputClass}
              placeholder="Nom de la galerie en anglais"
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#381910] mb-2">
              Présentation Français
            </label>
            <textarea
              value={formData.presentation_fr}
              onChange={(e) => setFormData(prev => ({ ...prev, presentation_fr: e.target.value }))}
              rows={5}
              className={`${inputClass} resize-none`}
              placeholder="Description de la galerie en français..."
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#381910] mb-2">
              Présentation Anglais
            </label>
            <textarea
              value={formData.presentation_en}
              onChange={(e) => setFormData(prev => ({ ...prev, presentation_en: e.target.value }))}
              rows={5}
              className={`${inputClass} resize-none`}
              placeholder="Description de la galerie en anglais..."
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-8 mt-8 border-t-2 border-[#e5d3bc]">
          <Link href={cancelUrl} className="flex-1">
            <Button 
              text_fr="Annuler" 
              text_en="Cancel"
              className="bg-[#7b6752] border-[#7b6752] py-3"
              disabled={isLoading}
            />
          </Link>
          <Button 
            text_fr={isLoading ? "En cours..." : submitLabel_fr}
            text_en={isLoading ? "Loading..." : submitLabel_en}
            handleClick={handleSubmit}
            className="bg-[#d1a26a] border-[#d1a26a] text-[#381910] py-3 font-semibold"
            disabled={isLoading}
          />
        </div>
      </div>

      <PreviewSection {...formData} />
    </div>
  );
}