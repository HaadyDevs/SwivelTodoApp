import React from "react";
import { Provider } from "react-redux";
import RootNavigator from "./navigators";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

function App() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
  });
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
