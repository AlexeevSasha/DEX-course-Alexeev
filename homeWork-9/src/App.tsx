import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { ProjectsList } from "./components/ProjectsList";
import { ITodo } from "./types";

const initialTodos = [
  { text: "Todo1", id: 0 },
  { text: "Todo2", id: 1 },
  { text: "Todo3", id: 2 },
  { text: "Todo4", id: 3 },
  { text: "Todo5", id: 4 },
  { text: "Todo6", id: 5 }
];

export const App = () => {
  const [state, setState] = useState({
    selectedProjectId: 0,
    projects: [
      { important: true, text: "Важный проект", id: 0 },
      { important: false, text: "Легкий проект", id: 1 }
    ],
    todos: [initialTodos, initialTodos],
    todoLists: []
  });
  const selectProject = (id: number) => {
    setState((state) => ({
      ...state,
      selectedProjectId: id
    }));
  };

  // const index = todoData.findIndex(el => el.id === id)
  // const newArray = [...todoData.slice(0, index), ...todoData.slice(index + 1)]
  // return {
  //     todoData: newArray
  // }
  const deleteTodo = (id: number) => {
    setState((state) => ({
      ...state,
      todos: {
        ...state.todos,
        [state.selectedProjectId]: state.todos[state.selectedProjectId].filter(
          (todo: ITodo, index: number) => todo.id !== id
        )
      }
    }));
  };
  return (
    <section className={"layout"}>
      <header className={"header"}>My TODO app</header>
      <aside className={"aside"}>
        {ProjectsList ? (
          <>
            <h3 className="project__title">Проекты</h3>
            <ProjectsList onClick={selectProject} projects={state.projects} />
          </>
        ) : (
          "Нету проектов"
        )}
      </aside>
      <main className={"main"}>
        {TodoList ? (
          <TodoList
            deleteCallback={deleteTodo}
            todos={state.todos[state.selectedProjectId]}
          />
        ) : (
          "Нету тудулиста"
        )}
      </main>
      <footer className={"footer"}>
        Эту страницу можно копировать, ваще спокойно, и публиковать где угодно.
        Да кто вообще читает что там в футере написано?
      </footer>
    </section>
  );
};
