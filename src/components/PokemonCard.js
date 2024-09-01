import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="border p-4 rounded shadow-lg">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-bold mt-2 text-center capitalize">{pokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;
