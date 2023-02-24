import React from "react";
import Header from "./components/Header";

const handleDragStart = () => {
  console.log("Drag Started");
};

const App = () => {
  return (
    <div className="min-h-screen h-full max-w-5xl mx-auto">
      <Header />
    </div>
  );
};

export default App;
