import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import recipesData from './recipesData';

interface Recipe {
  id: number;
  title: string;
  image: string;
}

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    searchRecipes(event.target.value);
  };

  const searchRecipes = (term: string) => {
    const results = recipesData.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="search-page">
      <h1>Busca de Receitas</h1>
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map(recipe => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <div className="search-result">
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
              </div>
            </Link>
          ))
        ) : (
          <p>Nenhuma receita encontrada.</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
