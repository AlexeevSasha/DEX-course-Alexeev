import React, { FC } from "react";
import { fetchProjects, fetchTotos } from "./mocks/mockFetcher";
import { IProject, ITodo } from "./types";

// Реализуйте хук для получения проектов, используя
// асинхронную функцию fetchProjects. Дайте пользователю
// знать, что происходит загрузка

type loadedData<T> = {
  isLoading: boolean;
  content: T;
};

const useProjects = (): loadedData<IProject[]> => {
  const [project, setProject] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getProject() {
      const respons = await fetchProjects();
      setProject(respons);
    }
    getProject();
  }, []);

  React.useEffect(() => {
    setLoading(project.length ? false : true);
  }, [project]);

  return {
    isLoading: loading,
    content: project
  };
};

// Реализуйте хук для получения todo проектов, используя
// асинхронную функцию fetchTotos. Дайте пользователю
// знать, что происходит загрузка. Реализуйте функцию
// удаления записи todo. Избегайте повторной загрузки
// данных — это сбросит удалённые элементы списка

type deletableLoadedTata<T> = loadedData<T> & {
  remove: (todoId: number) => void;
};
type ProjectsTodos = {
  [key: number]: Array<ITodo>;
};

const useTodos = (projectId: number): deletableLoadedTata<ITodo[]> => {
  const [todos, setTodos] = React.useState<ProjectsTodos>({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (projectId !== null && todos[projectId] === undefined) {
      setLoading(true);
      async function getProject() {
        const respons = await fetchTotos(projectId);
        setTodos({ ...todos, [projectId]: respons });
        setLoading(false);
      }
      getProject();
    }
  }, [projectId]);

  return {
    isLoading: loading,
    content: todos[projectId],
    remove: (todoId) => {
      const removeTodo = todos[projectId].filter((todo) => todoId !== todo.id);
      setTodos({ ...todos, [projectId]: removeTodo });
    }
  };
};

// Допишите компонент фильтра. При нажатии на кнопку "поиск"
// необходимо вызвать onFilter из свойств компонента.
// Дополнительной задачей является минимизация количества
// обновлений компонента (вывод "FilterComponent render" в
// консоль должен быть минимальным)

type FilterProps = {
  onFilter: (search: string) => void;
};

const FilterComponent: FC<FilterProps> = ({ onFilter }) => {
  React.useMemo(() => console.log("FilterComponent render"), []);
  const input = React.useRef(null);
  return (
    <div>
      Фильтр:&nbsp;
      <input ref={input} />
      <button onClick={() => onFilter(input.current.value.toLowerCase())}>
        поиск
      </button>
    </div>
  );
};

export { useProjects, useTodos, FilterComponent };
