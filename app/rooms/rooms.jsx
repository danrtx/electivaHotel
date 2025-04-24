"use client";
import React from 'react';
import NavItem from './components/NavItem';  
import RoomCard from './components/RoomCard'; 

export default function Rooms() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="flex">
        <div className="w-64 p-4 border-r border-amber-200">
          <div className="rounded-lg overflow-hidden border-2 border-amber-800">
            <NavItem label="Home" active={false} />
            <NavItem label="Reservas" active={true} />
            <NavItem label="Check in" active={false} />
            <NavItem label="Check out" active={false} />
            <NavItem label="Pagos" active={false} />
            <NavItem label="Notificaciones" active={false} />
            <NavItem label="Reportes" active={false} />
            <NavItem label="Configuraciones" active={false} />
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Double Room Card 1 */}
            <RoomCard 
              title="Habitación doble:" 
              description="Espacio cómodo con una cama matrimonial para dos personas."
              imageSrc="/double-room-1.jpg"
            />

            {/* Double Room Card 2 */}
            <RoomCard 
              title="Habitación doble:" 
              description="Espacio cómodo con una cama matrimonial para dos personas."
              imageSrc="/double-room-2.jpg"
            />

            {/* Single Room Card 1 */}
            <RoomCard 
              title="Habitación sencilla" 
              description="Cuarto acogedor con una cama individual, ideal para una persona."
              imageSrc="/single-room-1.jpg"
            />

            {/* Single Room Card 2 */}
            <RoomCard 
              title="Habitación sencilla" 
              description="Cuarto acogedor con una cama individual, ideal para una persona."
              imageSrc="/single-room-2.jpg"
            />

            {/* Triple Room Card 1 */}
            <RoomCard 
              title="Habitación triple:" 
              description="Habitación amplia con tres camas individuales o una doble y una sencilla."
              imageSrc="/triple-room-1.jpg"
            />

            {/* Triple Room Card 2 */}
            <RoomCard 
              title="Habitación triple:" 
              description="Habitación amplia con tres camas individuales o una doble y una sencilla."
              imageSrc="/triple-room-2.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


