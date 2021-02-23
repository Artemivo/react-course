import { useSelector } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { fetchAddGists } from './actions/action';
import apiClient from './API';
import rootReducer from './redusers';


const asyncMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch.bind(store), store.getState.bind(store));
  }
  return next(action);
};

const loggerMiddleware = store => next => action => {
  console.log('-------------------');
  console.log('prev state:', store.getState());
  console.log('action:', action);
  next(action);
  console.log('next state:', store.getState());
  console.log('-------------------')
};

export default () => {
  return createStore(
      rootReducer,
      applyMiddleware(
        asyncMiddleware, loggerMiddleware
      )
    );
      }
    

    

  