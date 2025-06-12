import { NextRequest, NextResponse } from 'next/server';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const COOKIE_NAME = process.env.ADMIN_COOKIE_NAME || "";
const COOKIE_VALUE = process.env.ADMIN_COOKIE_VALUE || "";

export async function GET(request: NextRequest) {
  // Vérifier l'authentification
  const authCookie = request.cookies.get(COOKIE_NAME);
  
  if (authCookie?.value === COOKIE_VALUE) {
    return NextResponse.json({ authenticated: true });
  }
  
  return NextResponse.json({ authenticated: false }, { status: 401 });
}

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { error: 'Le mot de passe est requis.' },
        { status: 400 }
      );
    }

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Mot de passe incorrect.' },
        { status: 401 }
      );
    }

    // Créer la réponse avec le cookie d'authentification
    const response = NextResponse.json({ message: 'Authentification réussie.' });
    
    // Définir le cookie d'authentification (valide 24h)
    response.cookies.set(COOKIE_NAME, COOKIE_VALUE, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60, // 24 heures
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Erreur lors de l\'authentification:', error);
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
  }
}

export async function DELETE() {
  // Déconnexion - supprime le cookie
  const response = NextResponse.json({ message: 'Déconnexion réussie.' });
  
  response.cookies.delete(COOKIE_NAME);
  
  return response;
}