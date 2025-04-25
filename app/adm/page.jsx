"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Upload } from 'lucide-react';

export default function RoomManagement() {
  const [selectedMenu, setSelectedMenu] = useState('Reportes');
  
  const menuItems = [
    "Home", "Reservas", "Check in", "Habitaciones", 
    "Pagos", "Notificaciones", "Reportes", "Configuraciones"
  ];

  return (
    <div className="min-h-screen bg-amber-50 p-4">
      <div className="flex gap-6 h-[calc(100vh-2rem)]">
        {/* Sidebar */}
        <div className="bg-peach-100 rounded-3xl p-4 shadow-md w-64 flex flex-col gap-3" 
             style={{ backgroundColor: '#fad7b8', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          {menuItems.map((item) => (
            <button
              key={item}
              className={`p-4 text-center rounded-xl transition-colors ${
                selectedMenu === item 
                ? 'bg-amber-800 text-white' 
                : 'bg-amber-200 hover:bg-amber-300 text-amber-900'
              }`}
              onClick={() => setSelectedMenu(item)}
              style={{ 
                backgroundColor: selectedMenu === item ? '#92400e' : '#fcd9aa',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-peach-100 rounded-3xl p-6 shadow-md flex flex-col gap-4"
             style={{ backgroundColor: '#fcd9aa', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          
          {/* Image Upload Area */}
          <div className="bg-white rounded-xl h-40 flex items-center justify-end p-4">
            <div className="bg-amber-100 rounded-lg p-2 w-24 h-24 flex flex-col items-center justify-center border border-amber-300">
              <div className="relative w-12 h-12">
                <Image 
                  src="/api/placeholder/48/48" 
                  alt="Room Image" 
                  width={48} 
                  height={48} 
                />
              </div>
              <div className="mt-2 bg-yellow-300 rounded-full p-2 shadow-md">
                <Upload size={16} className="text-amber-800" />
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="bg-amber-200 rounded-xl p-4 shadow-md border border-amber-300">
                <p className="text-amber-900">Tipo de habitación</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-amber-200 rounded-xl p-4 shadow-md border border-amber-300">
                <p className="text-amber-900">Numero</p>
              </div>
            </div>
          </div>

          {/* Description Area */}
          <div className="flex gap-4">
            <div className="flex-grow">
              <div className="bg-amber-200 rounded-xl p-4 h-32 shadow-md border border-amber-300 flex items-center justify-center">
                <p className="text-amber-900">Descripcion de la habitacion</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-64">
              <div className="bg-amber-200 rounded-xl p-4 shadow-md border border-amber-300">
                <p className="text-amber-900">Precio</p>
              </div>
              <div className="bg-amber-200 rounded-xl p-4 shadow-md border border-amber-300">
                <p className="text-amber-900">Estado</p>
              </div>
            </div>
          </div>

          {/* Create Room Button */}
          <div className="flex justify-center mt-4">
            <button 
              className="bg-amber-200 hover:bg-amber-300 text-amber-900 font-medium py-3 px-8 rounded-xl shadow-md transition duration-300 border border-amber-300"
            >
              Crear habitacion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}