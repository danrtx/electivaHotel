"use client";
import React from 'react';

export default function Login() {
  return (
    <div className="flex min-h-screen bg-amber-50">
      {/* Left side with logo */}
      <div className="w-1/2 flex flex-col items-center justify-center p-8">
        <div className="flex flex-col items-center max-w-md">
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" className="w-24 h-12 text-red-500">
              <path d="M10,40 L10,20 L90,20 L90,40" stroke="currentColor" strokeWidth="5" fill="none"/>
              <rect x="20" y="20" width="5" height="30" fill="currentColor"/>
              <rect x="75" y="20" width="5" height="30" fill="currentColor"/>
              <rect x="5" y="15" width="90" height="5" fill="currentColor"/>
              <rect x="5" y="5" width="90" height="5" fill="currentColor"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold tracking-wider mb-2 text-center">HOTEL LINDO SUEÑO</h1>
        </div>
      </div>

      {/* Right side with login form */}
      <div className="w-1/2 flex items-center justify-center p-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-red-100 opacity-20 z-0">
          {/* Background decoration */}
        </div>
        
        <div className="bg-amber-950 p-8 rounded-lg shadow-lg w-full max-w-md z-10 relative">
          <h2 className="text-2xl font-semibold text-white text-center mb-8 italic">
            Inicio de sesión
          </h2>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Usuario"
                className="w-full px-4 py-3 rounded bg-amber-50 text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full px-4 py-3 rounded bg-amber-50 text-amber-950 focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded transition duration-300"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}