// src/HomePage.jsx
import React, { useEffect, useState } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load recipes from data.json
  useEffect(() => {
    fetch("/data.json") // make sure data.json is inside "public/" folder
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🍴 Recipe Sharing App
      </h1>

      {recipes.length === 0 ? (
        <p className="text-center text-gray-600">Loading recipes...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-2">{recipe.description}</p>
              <h3 className="font-medium">Ingredients:</h3>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;