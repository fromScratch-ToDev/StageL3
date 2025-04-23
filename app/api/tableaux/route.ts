import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET /api/tableaux?nom=NomDeGalerie
export async function GET() {
  try {
    const tableaux = await prisma.tableau.findMany();

    return NextResponse.json(tableaux);
  } catch (error) {
    console.error('Erreur lors de la récupération des tableaux :', error);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}
