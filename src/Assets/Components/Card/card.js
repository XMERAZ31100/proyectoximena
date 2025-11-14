import React from 'react';

const Card = ({ title = "Título", number = 42, text = 'Texto', description = 'Texto' }) => {
  // Usa 'description' si está disponible, sino usa 'text'
  const displayText = description || text;
  
  return (
    <div className="w-full h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg flex items-center p-3 gap-3">
      {/* Icono con número - ahora acepta iconos React */}
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 backdrop-blur-md border border-white/30">
        {typeof number === 'number' ? (
          <span className="text-white font-bold text-md">{number}</span>
        ) : (
          <div className="text-white">
            {number}
          </div>
        )}
      </div>
      
      {/* Contenido de texto */}
      <div className="flex flex-col text-left text-white flex-1">
        <span className="text-md font-bold drop-shadow-md truncate">{title}</span>
        <span className="text-xs font-medium opacity-90 truncate">{displayText}</span>
      </div>
    </div>
  );
};

export default Card;