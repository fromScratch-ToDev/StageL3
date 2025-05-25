import { getGalleryFolderName } from '@/lib/gallery-utils';
import prisma from '@/lib/prisma';
import { existsSync } from 'fs';
import { mkdir, rmdir } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

// Type guard pour les erreurs Prisma
function isPrismaError(error: unknown): error is { code: string } {
  return typeof error === 'object' && error !== null && 'code' in error;
}

// GET /api/galeries
export async function GET() {
  try {
    const galeries = await prisma.galerie.findMany({
      select: { 
        nom_fr: true,
        nom_en: true,
        presentation_fr : true,
        presentation_en : true,
        order: true,
      },
      orderBy: {
        order: 'asc'
      }
    });
    return NextResponse.json(galeries);
  } catch (error) {
    console.error('Erreur lors de la récupération des galeries :', error);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}

// POST /api/galeries
export async function POST(request: NextRequest) {
  try {
    const { nom_fr, nom_en, presentation_fr, presentation_en } = await request.json();

    // Validation des champs requis
    if (!nom_fr || !nom_en || !presentation_fr || !presentation_en) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      );
    }

    // Obtenir le prochain ordre disponible
    const lastGalerie = await prisma.galerie.findFirst({
      orderBy: { order: 'desc' },
      select: { order: true }
    });
    const nextOrder = (lastGalerie?.order ?? -1) + 1;

    // Créer le dossier pour cette galerie
    const folderName = getGalleryFolderName(nom_fr);
    const galerieFolderPath = path.join(process.cwd(), 'public', 'images', folderName);
    
    if (!existsSync(galerieFolderPath)) {
      await mkdir(galerieFolderPath, { recursive: true });
    }

    const nouvelleGalerie = await prisma.galerie.create({
      data: {
        nom_fr,
        nom_en,
        presentation_fr,
        presentation_en,
        order: nextOrder,
      },
    });

    return NextResponse.json(nouvelleGalerie, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création de la galerie :', error);
    
    // Gestion de l'erreur de contrainte unique
    if (isPrismaError(error) && error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Une galerie avec ce nom français existe déjà.' },
        { status: 409 }
      );
    }
    
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}

// PUT /api/galeries
export async function PUT(request: NextRequest) {
  try {
    const { nom_fr, nom_en, presentation_fr, presentation_en, nom_fr_original } = await request.json();

    // Validation des champs requis
    if (!nom_fr || !nom_en || !presentation_fr || !presentation_en || !nom_fr_original) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis, y compris nom_fr_original.' },
        { status: 400 }
      );
    }

    const galerieModifiee = await prisma.galerie.update({
      where: { nom_fr: nom_fr_original },
      data: {
        nom_fr,
        nom_en,
        presentation_fr,
        presentation_en,
      },
    });

    return NextResponse.json(galerieModifiee);
  } catch (error) {
    console.error('Erreur lors de la modification de la galerie :', error);
    
    if (isPrismaError(error)) {
      if (error.code === 'P2025') {
        return NextResponse.json(
          { error: 'Galerie non trouvée.' },
          { status: 404 }
        );
      }
      
      if (error.code === 'P2002') {
        return NextResponse.json(
          { error: 'Une galerie avec ce nom français existe déjà.' },
          { status: 409 }
        );
      }
    }
    
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}

// DELETE /api/galeries
export async function DELETE(request: NextRequest) {
  try {
    const { nom_fr } = await request.json();

    if (!nom_fr) {
      return NextResponse.json(
        { error: 'Le nom français de la galerie est requis.' },
        { status: 400 }
      );
    }

    // Vérifier s'il y a des tableaux associés
    const galerieAvecTableaux = await prisma.galerie.findUnique({
      where: { nom_fr },
      include: { tableaux: true },
    });

    if (!galerieAvecTableaux) {
      return NextResponse.json(
        { error: 'Galerie non trouvée.' },
        { status: 404 }
      );
    }

    if (galerieAvecTableaux.tableaux.length > 0) {
      return NextResponse.json(
        { error: 'Impossible de supprimer une galerie contenant des tableaux.' },
        { status: 400 }
      );
    }

    // Supprimer la galerie de la base de données
    await prisma.galerie.delete({
      where: { nom_fr },
    });

    // Supprimer le dossier associé directement
    const folderName = getGalleryFolderName(nom_fr);
    const fullPath = path.join(process.cwd(), 'public', 'images', folderName);
    
    try {
      if (existsSync(fullPath)) {
        await rmdir(fullPath, { recursive: true });
      }
    } catch (error) {
      console.warn('Erreur lors de la suppression du dossier:', error);
    }

    return NextResponse.json({ message: 'Galerie supprimée avec succès.' });
  } catch (error) {
    console.error('Erreur lors de la suppression de la galerie :', error);
    
    if (isPrismaError(error) && error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Galerie non trouvée.' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
