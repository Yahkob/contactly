
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  const loggerMiddleware = createLogger();

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(loggerMiddleware),
  );

  return store;
}
