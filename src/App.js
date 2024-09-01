import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Pokémon Search</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PokemonList searchQuery={searchQuery} />
    </div>
  );
};

export default App;

