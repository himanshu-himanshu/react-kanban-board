import uuid from "react-uuid";

const data = [
  {
    id: uuid(),
    heading: "Todo",
    content: [
      {
        id: uuid(),
        task: "Create Kanban",
      },
      {
        id: uuid(),
        task: "Implement Redux",
      },
    ],
  },
  {
    id: uuid(),
    heading: "In Progress",
    content: [
      {
        id: uuid(),
        task: "Learn React",
      },
    ],
  },
  {
    id: uuid(),
    heading: "Completed",
    content: [
      {
        id: uuid(),
        task: "Be Happy",
      },
    ],
  },
];

export default data;
