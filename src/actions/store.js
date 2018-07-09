import {createStore} from 'redux';

function reducer(state = {}, action) {
  switch(action.type) {
    case 'LAUNCH_DEMO_APP_CALCULATOR':
      
    default: 
      return state;
  }
}

export const store = createStore(reducer);
export const action = type => store.dispatch({type})