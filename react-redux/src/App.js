import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store'
import './App.css';
import CakeContainer from './component/CakeContainer';
import HooksCakeContainer from './component/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
