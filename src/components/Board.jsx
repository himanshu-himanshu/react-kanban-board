import React, { useState, useRef } from "react";
import uuid from "react-uuid";

import info from "../constants/Data";

const Board = () => {
  const [data, setData] = useState(info);

  const [dragStartedColId, setDragStartedColId] = useState();
  const [dragEndedColId, setDragEndedColId] = useState();
  //const [draggedTaskId, setDraggedTaskId] = useState();
  const [draggedTaskIndex, setDraggedTaskIndex] = useState();

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position, id, taskId) => {
    dragItem.current = position;
    //setDraggedTaskId(taskId);
    setDragStartedColId(id);
    setDraggedTaskIndex(position);
    console.log(position);
    console.log(draggedTaskIndex);
  };

  const dragEnter = (e, position, id) => {
    e.preventDefault();
    dragOverItem.current = position;
    setDragEndedColId(id);
  };

  const drop = (e) => {
    if (dragStartedColId == dragEndedColId) {
      console.log("Same Box");
      return;
    } else {
      const dragStartedColIndex = data.findIndex(
        (e) => e.id === dragStartedColId
      );
      const dragEndedColIndex = data.findIndex((e) => e.id === dragEndedColId);

      const sourceCol = data[dragStartedColIndex];
      const destCol = data[dragEndedColIndex];

      const sourceContent = [...sourceCol.content];
      const desContent = [...destCol.content];

      console.log(sourceContent);

      const [removedItem] = sourceContent.splice(draggedTaskIndex, 1);

      console.log(removedItem);

      desContent.splice(-1, 0, removedItem);

      data[dragEndedColIndex].content = desContent;

      data[dragStartedColIndex].content = sourceContent;

      setData([...data]);
    }
  };

  return (
    <div
      className="flex flex-row justify-around min-h-[300px] h-full w-full py-6 mt-12"
      onDragEnd={drop}
    >
      {data.map((item, index) => (
        <div
          className="h-full w-full mx-4 flex flex-col justify-center items-center  bg-[#635985] shadow-xl"
          key={item.id}
          onDragEnter={(e) => dragEnter(e, index, item.id)}
        >
          <h1 className="text-gray-200 w-full flex justify-center py-6 text-2xl bg-[#393053] shadow-xl">
            {item.heading}
          </h1>
          <div className="w-[70%] min-h-[400px]">
            {item.content && (
              <>
                {item.content.map((task, index) => (
                  <div
                    draggable
                    onDragStart={(e) => dragStart(e, index, item.id, task.id)}
                    key={task.id}
                    className="py-8 px-4 bg-gray-100 flex flex-col items-center justify-center my-4 hover:cursor-pointer h-full shadow-lg"
                  >
                    {task.task && (
                      <h1 className="text-xl text-gray-900">{task.task}</h1>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
