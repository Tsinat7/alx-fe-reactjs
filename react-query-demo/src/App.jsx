import React from "react";
import PostsComponent from "./components/PostsComponent.jsx";

function App() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">React Query Demo</h1>
      <PostsComponent />
    </div>
  );
}

export default App;