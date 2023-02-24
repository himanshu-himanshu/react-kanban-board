import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";

const handleDragStart = () => {
  console.log("Drag Started");
};

const App = () => {
  return (
    <div className="min-h-screen h-full max-w-5xl mx-auto">
      <Header />
      <Board />
    </div>
  );
};

export default App;
