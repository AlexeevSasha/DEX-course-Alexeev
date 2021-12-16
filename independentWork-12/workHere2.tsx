import { createStore, combineReducers } from "redux";
const Initiontate = {
  departments: ["TV"],
  emloees: [
    {
      name: "Alex",
      departments: "TV"
    }
  ]
};

interface IAction {
  type: string;
  payload: string;
}

interface IEmloees {
  type: string;
  payload: {
    name: string;
    departments: string;
  };
}
const departmentsAdd: IAction = {
  type: "departments/add",
  payload: "Mobile"
};
const departmentsDelete: IAction = {
  type: "departments/delete",
  payload: "Mobile"
};
const emloeesAdd: IEmloees = {
  type: "emloees/add",
  payload: { name: "Jonh", departments: "Mobile" }
};
const emloeesDelete: IEmloees = {
  type: "emploees/delete",
  payload: {
    name: "Jonh",
    departments: "Mobile"
  }
};

// Создать редюсер с экшонами "departments/add" и "departments/delete"
const departmentsReducer = (
  state = Initiontate.departments,
  action: IAction
): string[] => {
  switch (action.type) {
    case "departments/add":
      return [...state, action.payload];
    case "departments/delete":
      return state.filter((el) => el !== action.payload);

    default:
      return state;
  }
};

// Создать редюсер с экшонами "emloees/add" и "emploees/delete"
const emloeesReducer = (
  state = Initiontate.emloees,
  action: IEmloees
): object[] => {
  switch (action.type) {
    case "emloees/add":
      return [...state, action.payload];
    case "emploees/delete":
      return state.filter((el) => el.name !== action.payload.name);
    default:
      return state;
  }
};

// Создать рут редюсер
interface IActionAll {
  type: string;
  payload:
    | string
    | {
        name: string;
        departments: string;
      };
}

const rootReducer = (state = Initiontate, action: IActionAll): any => {
  return {
    departments: departmentsReducer(state.departments, action),
    emloees: emloeesReducer(state.emloees, action)
  };
};
console.log(rootReducer);

// const rootReducer = combineReducers({
//   departments: departmentsReducer,
//   emloees: emloeesReducer
// });

// создать стор
const store = createStore(rootReducer);

// вызвать каждый экшон
store.dispatch(departmentsAdd);
console.log(store.getState());
store.dispatch(departmentsDelete);
console.log(store.getState());
store.dispatch(emloeesAdd);
console.log(store.getState());
store.dispatch(emloeesDelete);
console.log(store.getState());

// законсолить изменения стейта
// console.log(store.getState());
