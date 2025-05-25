import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// PATCH /api/tableaux/reorder
export async function PATCH(request: NextRequest) {
  try {
    const { tableaux } = await request.json();

    if (!tableaux || !Array.isArray(tableaux)) {
      return NextResponse.json(
        { error: 'Un tableau avec les nouvelles positions est requis.' },
        { status: 400 }
      );
    }

    // Utiliser une transaction pour mettre à jour tous les ordres
    await prisma.$transaction(
      tableaux.map(({ id, order }) =>
        prisma.tableau.update({
          where: { id },
          data: { order },
        })
      )
    );

    return NextResponse.json({ 
      success: true, 
      message: 'Ordre des tableaux mis à jour avec succès.' 
    });
  } catch (error) {
    console.error('Erreur lors de la réorganisation des tableaux :', error);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}