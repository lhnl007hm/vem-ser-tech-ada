import React from 'react';

interface Recipe {
  id: number;
  title: string;
  image: string;
  description: string;
}

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
}

export default RecipeCard;
