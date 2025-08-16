import React from "react";
import RecipeCard from "./components/RecipeCard";

function App() {
  // Sample recipe data
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta with eggs, cheese, pancetta, and pepper.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Avocado Toast",
      description: "Healthy breakfast with avocado, toast, and a sprinkle of chili flakes.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Chocolate Cake",
      description: "Rich and moist chocolate cake perfect for dessert.",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Recipe Sharing Platform
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 p-6 text-center text-gray-600">
        © 2025 Recipe Sharing Platform. All rights reserved.
      </footer>
    </div>
  );
}

export default App;