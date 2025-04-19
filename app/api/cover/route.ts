/**
 * Route spécial pour obtenir la 'cover' d'une galerie, c-à-d l'image du premier tableau de la galerie
 */
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request){    
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get('lang');
    try {
       // Récupération des noms de galeries
      const covers = await prisma.galerie.findMany({
        select: { 
          nom_fr: true,
          nom_en: true,
          tableaux : {
            take: 1,
            select: {
              imagePath: true
            }
          }
        },
        
      });
     
      const transformedCovers = covers
      .filter(c => c.tableaux.length > 0)
      .map(c => {
        const nom = lang === "FR" ? c.nom_fr : c.nom_en;
        return ({
          nom,
          path: c.tableaux[0].imagePath
        })
      });
      
      return NextResponse.json(transformedCovers);
    } catch (error) {
      console.error('Erreur lors de la récupération des "cover" des galeries :', error);
      return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
    }
  }
  