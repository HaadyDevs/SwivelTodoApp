import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import RootNavigator from './navigators';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
