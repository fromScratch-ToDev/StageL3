"use client"
import Button from '@/components/Button/Button';
import H2 from '@/components/Text/H2';
import P from '@/components/Text/P';
import { useState } from 'react';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erreur de connexion');
      }

      onLoginSuccess();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erreur inconnue');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary px-4">
      <div className="w-full max-w-md">
        <div className="w-fit rounded-xl shadow-lg p-8 border border-[#e5d3bc] bg-secondary/20 ">
          <H2 text_fr="Administration" text_en="Administration" className="text-[#381910] mb-8 text-center" />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xl font-semibold text-[#381910] mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-[#e5d3bc] rounded-lg focus:outline-none focus:border-[#7b6752] text-white focus:text-[#7b6752] bg-transparent transition"
                placeholder="Entrez le mot de passe"
                disabled={isLoading}
                required
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded">
                <P text_fr={error} text_en={error} className="text-sm text-red-700" />
              </div>
            )}

            <Button 
              text_fr={isLoading ? "Connexion..." : "Se connecter"}
              text_en={isLoading ? "Logging in..." : "Login"}
              disabled={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
}