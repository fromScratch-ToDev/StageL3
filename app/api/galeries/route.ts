import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET /api/galeries
export async function GET() {
  try {
    // Récupération des noms de galeries
    const galeries = await prisma.galerie.findMany({
      select: { nom_fr: true }, // Seulement le nom en français
    });

    // Transformation des résultats en tableau de noms
    const nomGaleries = galeries.map((galerie) => galerie.nom_fr);

    return NextResponse.json(nomGaleries);
  } catch (error) {
    console.error('Erreur lors de la récupération des galeries :', error);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
