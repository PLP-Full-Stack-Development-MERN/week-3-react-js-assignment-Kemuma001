import React from "react";
import logo from "./logo.svg"; // Default React logo

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={logo} alt="App Logo" className="w-32 h-32 animate-spin" />
      <h1 className="text-2xl font-bold mt-4">Welcome to My React App</h1>
    </div>
  );
}

export default App;
