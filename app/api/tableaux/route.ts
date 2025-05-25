import prisma from '@/lib/prisma';
import { existsSync } from 'fs';
import { unlink } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

// Type guard pour les erreurs Prisma
function isPrismaError(error: unknown): error is { code: string } {
  return typeof error === 'object' && error !== null && 'code' in error;
}

// GET /api/tableaux?galerieNom=NomDeGalerie
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const galerieNom = searchParams.get('galerieNom');

    let whereClause = {};
    if (galerieNom) {
      whereClause = { laGalerieId: galerieNom };
    }

    const tableaux = await prisma.tableau.findMany({
      where: whereClause,
      orderBy: {
        order: 'asc'
      },
      include: {
        laGalerie: {
          select: {
            nom_fr: true,
            nom_en: true
          }
        }
      }
    });
    return NextResponse.json(tableaux);
  } catch (error) {
    console.error('Erreur lors de la récupération des tableaux :', error);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}

// POST /api/tableaux
export async function POST(request: NextRequest) {
  try {
    const { imagePath, description_fr, description_en, laGalerieId, order } = await request.json();

    // Validation des champs requis
    if (!imagePath || !description_fr || !description_en || !laGalerieId) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis (imagePath, description_fr, description_en, laGalerieId).' },
        { status: 400 }
      );
    }

    // Vérifier que la galerie existe
    const galerieExiste = await prisma.galerie.findUnique({
      where: { nom_fr: laGalerieId }
    });

    if (!galerieExiste) {
      return NextResponse.json(
        { error: 'La galerie spécifiée n\'existe pas.' },
        { status: 400 }
      );
    }

    // Si aucun ordre n'est spécifié, utiliser le prochain numéro disponible
    let orderValue = order;
    if (orderValue === undefined || orderValue === null) {
      const dernierTableau = await prisma.tableau.findFirst({
        where: { laGalerieId },
        orderBy: { order: 'desc' }
      });
      orderValue = dernierTableau ? dernierTableau.order + 1 : 1;
    }

    const nouveauTableau = await prisma.tableau.create({
      data: {
        imagePath,
        description_fr,
        description_en,
        laGalerieId,
        order: orderValue,
      },
      include: {
        laGalerie: {
          select: {
            nom_fr: true,
            nom_en: true
          }
        }
      }
    });

    return NextResponse.json(nouveauTableau, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de la création du tableau :', error);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}

// PUT /api/tableaux
export async function PUT(request: NextRequest) {
  try {
    const { id, imagePath, description_fr, description_en, laGalerieId, order } = await request.json();

    // Validation des champs requis
    if (!id || !imagePath || !description_fr || !description_en || !laGalerieId) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis (id, imagePath, description_fr, description_en, laGalerieId).' },
        { status: 400 }
      );
    }

    // Vérifier que la galerie existe
    const galerieExiste = await prisma.galerie.findUnique({
      where: { nom_fr: laGalerieId }
    });

    if (!galerieExiste) {
      return NextResponse.json(
        { error: 'La galerie spécifiée n\'existe pas.' },
        { status: 400 }
      );
    }

    const tableauModifie = await prisma.tableau.update({
      where: { id: parseInt(id) },
      data: {
        imagePath,
        description_fr,
        description_en,
        laGalerieId,
        ...(order !== undefined && { order })
      },
      include: {
        laGalerie: {
          select: {
            nom_fr: true,
            nom_en: true
          }
        }
      }
    });

    return NextResponse.json(tableauModifie);
  } catch (error) {
    console.error('Erreur lors de la modification du tableau :', error);
    
    if (isPrismaError(error) && error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Tableau non trouvé.' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}

// DELETE /api/tableaux
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'L\'ID du tableau est requis.' },
        { status: 400 }
      );
    }

    // Récupérer le tableau avant suppression pour obtenir le chemin de l'image
    const tableau = await prisma.tableau.findUnique({
      where: { id: parseInt(id) },
    });

    if (!tableau) {
      return NextResponse.json(
        { error: 'Tableau non trouvé.' },
        { status: 404 }
      );
    }

    // Supprimer le tableau de la base de données
    const tableauSupprime = await prisma.tableau.delete({
      where: { id: parseInt(id) },
    });

    // Supprimer l'image associée directement
    if (tableau.imagePath) {
      try {
        const fullPath = path.join(process.cwd(), 'public', tableau.imagePath);
        if (existsSync(fullPath)) {
          await unlink(fullPath);
        }
      } catch (error) {
        console.warn('Erreur lors de la suppression de l\'image:', error);
      }
    }

    return NextResponse.json({ 
      message: 'Tableau supprimé avec succès.',
      tableau: tableauSupprime 
    });
  } catch (error) {
    console.error('Erreur lors de la suppression du tableau :', error);
    
    if (isPrismaError(error) && error.code === 'P2025') {
      return NextResponse.json(
        { error: 'Tableau non trouvé.' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
