import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET /api/tableaux?nom=NomDeGalerie
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const nom = searchParams.get('nom');
  
  if (!nom) {
    return NextResponse.json({ error: 'Paramètre "nom" manquant.' }, { status: 400 });
  }

  try {
    const tableaux = await prisma.tableau.findMany({
      where: {
        OR: [
          { laGalerie: { nom_fr: nom } },
          { laGalerie: { nom_en: nom } },
        ]
      }
    });

    return NextResponse.json(tableaux);
  } catch (error) {
    console.error('Erreur lors de la récupération des tableaux :', error);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
