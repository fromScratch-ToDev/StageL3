import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET /api/galeries
export async function GET() {
  try {
    // Récupération des noms de galeries
    const galeries = await prisma.galerie.findMany({
      select: { 
        nom_fr: true,
        nom_en: true 
      }
    });


    return NextResponse.json(galeries);
  } catch (error) {
    console.error('Erreur lors de la récupération des galeries :', error);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
