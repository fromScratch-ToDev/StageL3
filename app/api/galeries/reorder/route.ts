import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// PATCH /api/galeries/reorder
export async function PATCH(request: NextRequest) {
  try {
    const { galeries } = await request.json();

    if (!Array.isArray(galeries)) {
      return NextResponse.json(
        { error: 'Le format des données est invalide.' },
        { status: 400 }
      );
    }

    // Utiliser une transaction pour mettre à jour tous les ordres
    await prisma.$transaction(
      galeries.map(galerie => 
        prisma.galerie.update({
          where: { nom_fr: galerie.nom_fr },
          data: { order: galerie.order }
        })
      )
    );

    return NextResponse.json({ message: 'Ordre des galeries mis à jour avec succès.' });
  } catch (error) {
    console.error('Erreur lors de la réorganisation des galeries :', error);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}