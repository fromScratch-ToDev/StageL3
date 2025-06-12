import { existsSync } from 'fs';
import { rmdir, unlink } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export async function DELETE(request: NextRequest) {
  try {
    const { imagePath, folderPath } = await request.json();

    if (imagePath) {
      // Supprimer un fichier image spécifique
      const fullPath = path.join(process.cwd(), 'public', imagePath);
      
      if (existsSync(fullPath)) {
        await unlink(fullPath);
        return NextResponse.json({ 
          success: true, 
          message: 'Image supprimée avec succès' 
        });
      } else {
        return NextResponse.json({ 
          success: true, 
          message: 'Image déjà supprimée ou inexistante' 
        });
      }
    }

    if (folderPath) {
      // Supprimer un dossier de galerie
      const fullPath = path.join(process.cwd(), 'public', 'images', folderPath);
      
      if (existsSync(fullPath)) {
        // Supprimer le dossier et tout son contenu
        await rmdir(fullPath, { recursive: true });
        return NextResponse.json({ 
          success: true, 
          message: 'Dossier supprimé avec succès' 
        });
      } else {
        return NextResponse.json({ 
          success: true, 
          message: 'Dossier déjà supprimé ou inexistant' 
        });
      }
    }

    return NextResponse.json(
      { error: 'imagePath ou folderPath requis' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Erreur lors de la suppression:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la suppression' },
      { status: 500 }
    );
  }
}