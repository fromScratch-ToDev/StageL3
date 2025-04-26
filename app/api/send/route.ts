import { NextRequest } from 'next/server';


/**
 * Logique pour envoyer un email
 * @param request 
 */
export async function POST(request: NextRequest) {
  const body = await request.json()
  const { email, subject, message } = body;

  console.log(email, subject, message); 
  
}