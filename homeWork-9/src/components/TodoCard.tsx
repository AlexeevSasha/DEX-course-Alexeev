import { ITodo } from "../types";

interface TodoCardProps {
  todo: ITodo;
  deleteCallback: (id: number) => void;
  id: number;
}

//TODO: сделать компонент TodoCard

export function TodoCard({ todo, deleteCallback, id }: TodoCardProps) {
  return (
    <div className="todoCard">
      <div>{todo.text}</div>
      <button className="delete_todo" onClick={() => deleteCallback(id)}>
        X
      </button>
    </div>
  );
}
