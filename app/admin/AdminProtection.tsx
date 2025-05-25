"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoginForm from './LoginForm';

interface AdminProtectionProps {
  children: React.ReactNode;
}

export default function AdminProtection({ children }: AdminProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  const checkAuth = async () => {
    try {
      // Vérifier l'authentification côté client en testant une route protégée
      const response = await fetch('/api/admin/auth', {
        method: 'GET',
        credentials: 'include'
      });
      setIsAuthenticated(response.ok);
    } catch {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    router.refresh(); // Rafraîchir la page pour mettre à jour les cookies
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/auth', { method: 'DELETE' });
      setIsAuthenticated(false);
      router.push('/admin');
      router.refresh();
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  // En cours de vérification
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#7b6752] mx-auto"></div>
          <p className="mt-4 text-[#381910]">Vérification...</p>
        </div>
      </div>
    );
  }

  // Non authentifié - afficher le formulaire de connexion
  if (!isAuthenticated) {
    return <LoginForm onLoginSuccess={handleLoginSuccess} />;
  }

  // Authentifié - afficher le contenu admin avec bouton de déconnexion
  return (
    <div>
      <div className="bg-[#7b6752] text-white p-2 flex justify-between items-center">
        <span className="text-sm">Administration - Connecté</span>
        <button
          onClick={handleLogout}
          className="text-sm hover:underline cursor-pointer"
        >
          Se déconnecter
        </button>
      </div>
      {children}
    </div>
  );
}