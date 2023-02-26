import uuid from "react-uuid";

const info = [
  {
    id: uuid(),
    heading: "Todo",
    content: [
      {
        id: uuid(),
        task: "Learn Something",
      },
      {
        id: uuid(),
        task: "Be Productive",
      },
    ],
  },
  {
    id: uuid(),
    heading: "In Progress",
    content: [
      {
        id: uuid(),
        task: "Get Selected",
      },
    ],
  },
  {
    id: uuid(),
    heading: "Completed",
    content: [
      {
        id: uuid(),
        task: "Create Kanban",
      },
      {
        id: uuid(),
        task: "Use Core React",
      },
    ],
  },
];

export default info;
