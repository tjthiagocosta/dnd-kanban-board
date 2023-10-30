import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import { Column } from "../types";

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  console.log(columns);
  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hihhen px-[40px]">
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {columns.map((column) => (
            <div>{column.title}</div>
          ))}
        </div>
        <button
          onClick={() => {
            createNewColumn();
          }}
          className=" flex gap-2 h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-mainBackgroundColor border-2 border-columnBackgroundColor p-4 ring-rose-500 hover:ring-2"
        >
          <PlusIcon />
          Create Column
        </button>
      </div>
    </div>
  );
  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateID(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  }
};

function generateID() {
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;
