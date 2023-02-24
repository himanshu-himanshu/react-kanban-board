import React from "react";
import Card from "./Card";

const Column = ({ data }) => {
  return (
    <>
      <div className="h-full w-full border mx-4 flex flex-col justify-center items-center">
        <h1 className="text-gray-200 w-full flex justify-center py-6 text-2xl border-b-2 border-purple-500">
          {data.heading}
        </h1>
        <div className="w-full h-full flex flex-col items-center space-y-6 py-6">
          {data.content.map((task) => (
            <Card task={task.task} key={task.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Column;
