import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import Chat from './src/screens/Chat'

const App = () => {
  return (
    <Provider store={store}>
      <Chat/>
    </Provider>
  )
};

export default App;

