import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import recipesData from './recipesData'; // import your JSON data

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Lista de Receitas</h1>
      <div className="recipe-list">
        {recipesData.recipes.map(recipe => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
