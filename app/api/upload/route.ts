import { getGalleryFolderName } from '@/lib/gallery-utils';
import { existsSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const galerieNom = formData.get('galerieNom') as string;

    if (!file || !galerieNom) {
      return NextResponse.json(
        { error: 'Fichier et nom de galerie requis' },
        { status: 400 }
      );
    }

    // Obtenir le nom du dossier pour cette galerie
    const folderName = getGalleryFolderName(galerieNom);

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Créer le chemin du dossier
    const uploadsDir = path.join(process.cwd(), 'public', 'images', folderName);
    
    // Créer le dossier s'il n'existe pas
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    // Générer un nom de fichier unique
    const timestamp = Date.now();
    const extension = path.extname(file.name);
    const filename = `${timestamp}${extension}`;
    const filepath = path.join(uploadsDir, filename);

    // Écrire le fichier
    await writeFile(filepath, buffer);

    // Retourner le chemin relatif pour la base de données
    const imagePath = `/images/${folderName}/${filename}`;

    return NextResponse.json({ 
      success: true, 
      imagePath,
      filename 
    });

  } catch (error) {
    console.error('Erreur lors de l\'upload:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'upload du fichier' },
      { status: 500 }
    );
  }
}