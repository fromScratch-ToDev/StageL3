// Dictionnaire pour mapper les noms de galeries aux dossiers
export const GALLERY_FOLDER_MAP: { [key: string]: string } = {
  "Stylo à bille 1971-1972": "stylo_a_bille",
  "Encres de chine Marseille/Luminy (1972-1974)": "encre_de_chine_marseille_luminy",
  "Monotypes 1977-1979": "monotypes",
  "Croquis traits continus 1977-1979": "croquis_traits_continu",
  "Encres de chine et « lying »": "encre_de_chine_et_lying",
  "Peinture à la caséine": "peinture_a_la_caseine",
  "Dessins préparatoires à partir de 1985": "dessins_preparatoires",
  "Dessins 2012": "dessins2012",
  "Peintures": "peintures"
};

export function getGalleryFolderName(galerieNom: string): string {
  let folderName = GALLERY_FOLDER_MAP[galerieNom];
  
  // Si la galerie n'est pas dans le dictionnaire, créer un nom de dossier basé sur le nom
  if (!folderName) {
    folderName = galerieNom
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Supprimer les caractères spéciaux
      .replace(/\s+/g, '_'); // Remplacer les espaces par des underscores
  }
  
  return folderName;
}