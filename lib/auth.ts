import { cookies } from 'next/headers';

const COOKIE_NAME = process.env.ADMIN_COOKIE_NAME || "";
const COOKIE_VALUE = process.env.ADMIN_COOKIE_VALUE;

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get(COOKIE_NAME);
    return authCookie?.value === COOKIE_VALUE;
  } catch {
    return false;
  }
}

export async function requireAuth() {
  if (!(await isAuthenticated())) {
    throw new Error('Non autorisé');
  }
}