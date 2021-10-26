import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {initState, reducer} from './reducers';
import sagas from './sagas';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (preloadState?: any) => {
  const store = createStore(
    combineReducers<any>(reducer),
    preloadState || initState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(sagas);
  return store;
};
