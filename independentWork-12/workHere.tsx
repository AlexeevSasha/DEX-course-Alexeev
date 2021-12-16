import { createStore } from "redux";
const Initiontate = {
  greeting: "Hello"
};

// Определить тип для экшона
interface IAction {
  type: string;
}

// создать экшены FirstAction, SecondAction, AsyncAction
const FirstAction: IAction = { type: "FirstAction" };
const SecondAction: IAction = { type: "SecondAction" };
const AsyncAction: IAction = { type: "AsyncAction" };

// создать редьюсер, который обрабатывает экшены: первый, второй, асинхронный
const reducer = (state = Initiontate, action: any): any => {
  switch (action.type) {
    case "FirstAction":
      return { ...state, greeting: "Hello FirstAction" };
    case "SecondAction":
      return { ...state, greeting: "Hello SecondAction" };
    case "AsyncAction":
      return { ...state, greeting: "Hello FirstAction" };
    default:
      return state;
  }
};

// создать стор
const store = createStore(reducer);

// TODO подписаться на изменения сторы
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Вызвать каждый экшон по одному разу
store.dispatch(FirstAction);
store.dispatch(SecondAction);
store.dispatch(AsyncAction);

// отписаться от изменений сторы
unsubscribe();
// store.unsubscribe();

// Вызвать первый экшон ещё раз
store.dispatch(FirstAction);

// Вывести в консоль текущее состояние сторы
// console.log(store.getState());
