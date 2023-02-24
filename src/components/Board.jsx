import React from "react";

import Column from "./Column";
import data from "../constants/Data";

const Board = () => {
  return (
    <div className="flex flex-row justify-around h-full w-full py-6 mt-12">
      {data.map((item) => (
        <Column data={item} key={item.id} />
      ))}
    </div>
  );
};

export default Board;
