import { ITodo } from "../types";
import { TodoCard } from "./TodoCard";

interface ITodoListProps {
  todos: ITodo[];
  deleteCallback: (id: number) => void;
}

//TODO: сделать TodoList компонент

export function TodoList({ todos, deleteCallback }: ITodoListProps) {
  return (
    <div>
      <h3 className="todoList__title ">
        {todos.length ? "Список" : "Cписок пуст"}
      </h3>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoCard
              todo={todo}
              deleteCallback={deleteCallback}
              id={todo.id}
              key={todo.id}
            />
          );
        })}
      </ul>
    </div>
  );
}
