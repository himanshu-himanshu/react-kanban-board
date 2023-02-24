import React from "react";

const Card = ({ task }) => {
  return (
    <div
      className="w-[70%] flex items-center justify-center py-8 px-4 bg-green-500"
      draggable
    >
      <h1 className="text-xl text-gray-100">{task}</h1>
    </div>
  );
};

export default Card;
