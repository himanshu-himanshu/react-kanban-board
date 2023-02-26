import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";

const App = () => {
  return (
    <div className="min-h-screen h-full max-w-6xl mx-auto">
      <Header />
      <Board />
    </div>
  );
};

export default App;
