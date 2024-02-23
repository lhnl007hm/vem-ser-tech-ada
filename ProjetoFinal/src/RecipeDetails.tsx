import React from 'react';
import { useParams } from 'react-router-dom';
import recipesData from './recipesData';

interface Recipe {
  id: number;
  title: string;
  image: string;
  prepTime: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
  vegetarian: boolean;
  glutenFree: boolean;
  videoUrl: string | null;
}

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipe: Recipe | undefined = recipesData.recipes.find(r => r.id === parseInt(id));

  if (!recipe) return <div>Receita não encontrada.</div>;

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>Tempo de Preparo: {recipe.prepTime}</p>
      <p>Porções: {recipe.servings}</p>
      <h3>Ingredientes:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instruções:</h3>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      {recipe.vegetarian && <p>Esta receita é vegetariana.</p>}
      {recipe.glutenFree && <p>Esta receita é sem glúten.</p>}
      {recipe.videoUrl && (
        <div>
          <p>Veja o vídeo relacionado:</p>
          <iframe 
            width="560" 
            height="315" 
            src={recipe.videoUrl} 
            title={recipe.title} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
