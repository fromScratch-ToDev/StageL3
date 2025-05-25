import Button from '@/components/Button/Button';
import H2 from '@/components/Text/H2';
import { Image as LucideImage } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface TableauFormData {
  description_fr: string;
  description_en: string;
  imagePath?: string;
}

interface TableauFormProps {
  initialData?: TableauFormData;
  onSubmit: (data: TableauFormData, imageFile?: File) => Promise<void>;
  isLoading: boolean;
  cancelUrl: string;
  title_fr: string;
  title_en: string;
  submitLabel_fr: string;
  submitLabel_en: string;
  showImageUpload?: boolean;
}

export default function TableauForm({
  initialData,
  onSubmit,
  isLoading,
  cancelUrl,
  title_fr,
  title_en,
  submitLabel_fr,
  submitLabel_en,
  showImageUpload = true
}: TableauFormProps) {
  const [formData, setFormData] = useState<TableauFormData>({
    description_fr: '',
    description_en: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  useEffect(() => {
    if (initialData) {
      setFormData({
        description_fr: initialData.description_fr,
        description_en: initialData.description_en
      });
      if (initialData.imagePath) {
        setImagePreview(initialData.imagePath);
      }
    }
  }, [initialData]);

  const handleSubmit = async () => {
    if (showImageUpload && !imageFile && !initialData?.imagePath) {
      alert('Une image est requise');
      return;
    }
    if (!formData.description_fr || !formData.description_en) {
      alert('Tous les champs sont requis');
      return;
    }
    await onSubmit(formData, imageFile || undefined);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const inputClass = "w-full px-4 py-3 border border-white rounded-lg focus:outline-none focus:border-[#7b6752] text-[#381910] bg-transparent transition";

  return (
    <div className="space-y-12">
      <div className="rounded-xl shadow-lg p-8 border border-[#e5d3bc]">
        <H2 text_fr={title_fr} text_en={title_en} className="text-[#381910] mb-8" />
        
        <div className="flex flex-col gap-6">
          {showImageUpload && (
            <div>
              <label className="block text-sm font-semibold text-[#381910] mb-2">
                Image du tableau <span className="text-red-500">*</span>
              </label>
              <div className="space-y-4">
                <label
                  className="flex items-center gap-3 cursor-pointer w-fit px-4 py-3 rounded-lg border border-white bg-primary hover:bg-[#f3e8da] transition-colors"
                  htmlFor="image-upload"
                >
                  <LucideImage className="w-5 h-5" />
                  <span className="text-[#381910] font-medium">Choisir une image</span>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    disabled={isLoading}
                  />
                </label>
                {imagePreview && (
                  <div className="relative h-[20dvh] w-auto">
                    <Image
                      src={imagePreview}
                      alt="Aperçu"
                      width={0}
                      height={0}
                      className="h-full w-auto object-contain rounded shadow border border-white"
                      style={{ width: 'auto', height: '20dvh' }}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-[#381910] mb-2">
              Description Français
            </label>
            <textarea
              value={formData.description_fr}
              onChange={(e) => setFormData(prev => ({ ...prev, description_fr: e.target.value }))}
              rows={5}
              className={`${inputClass} resize-none`}
              placeholder="Description en français..."
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#381910] mb-2">
              Description Anglais
            </label>
            <textarea
              value={formData.description_en}
              onChange={(e) => setFormData(prev => ({ ...prev, description_en: e.target.value }))}
              rows={5}
              className={`${inputClass} resize-none`}
              placeholder="Description in English..."
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
    </div>
  );
}