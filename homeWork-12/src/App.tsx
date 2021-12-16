import React from "react";
import { Provider } from 'react-redux'
import { Console } from './Console'
import { store } from './store/index'




function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Console />
      </div>
    </Provider>
  );
}

export default App;
