import React, { useState, useRef } from "react";

import info from "../constants/Data";

const Board = () => {
  const [data, setData] = useState(info);

  const [dragStartedColId, setDragStartedColId] = useState();
  const [dragEndedColId, setDragEndedColId] = useState();
  const [draggedTaskIndex, setDraggedTaskIndex] = useState();
  const [draggedTaskId, setDraggedTaskId] = useState();

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position, id, taskId) => {
    dragItem.current = position;
    setDragStartedColId(id);
    setDraggedTaskIndex(position);
    setDraggedTaskId(taskId);
  };

  const dragEnter = (e, position, id) => {
    e.preventDefault();
    dragOverItem.current = position;
    setDragEndedColId(id);
  };

  const drop = (e) => {
    if (dragStartedColId === dragEndedColId) {
      setDraggedTaskId();
      setDragEndedColId();
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

      const [removedItem] = sourceContent.splice(draggedTaskIndex, 1);

      desContent.splice(-1, 0, removedItem);

      data[dragEndedColIndex].content = desContent;

      data[dragStartedColIndex].content = sourceContent;

      setData([...data]);
      setDraggedTaskId();
      setDragEndedColId();
    }
  };

  return (
    <div
      className="flex flex-row justify-around min-h-[300px] h-full w-full py-6 mt-12"
      onDragEnd={drop}
    >
      {data.map((item, index) => (
        <div
          className={
            dragEndedColId === item.id
              ? "column bg-[#312a4b]"
              : "column bg-[#635985]"
          }
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
                    className={
                      draggedTaskId === task.id
                        ? "draggedDiv bg-pink-200"
                        : " bg-gray-100 draggedDiv"
                    }
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
