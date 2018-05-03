import { applyMiddleware, createStore } from 'redux';
import fetchUserMiddleware from './middlewares/fetchUserMiddleware';
import reducers from './reducers';

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  if (!console.group) return rawDispatch;
  return action => {
    console.group(action.type);
    console.log('%c prev state', 'color:gray', store.getState());
    console.log('%c action', 'color:blue', action);
    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color:green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(fetchUserMiddleware)(createStore);
  const store = createStoreWithMiddleware(reducers);

  if(process.env.NODE_ENV!== 'production') {
    store.dispatch = addLoggingToDispatch(store);
  }
  return store;

}
