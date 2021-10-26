import React from 'react';
import {Provider} from 'react-redux';
import routes from './app/routes';
import {configureStore} from './app/store';

const App = () => {
  return <Provider store={configureStore()}>{routes}</Provider>;
};

export default App;
