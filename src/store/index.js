
import { createStore } from 'redux';
//import { combineReducers } from 'redux';


const initialState = {
    title: 'Loding...',
    token: '',
    cart: []
}

/* const rootReducer = combineReducers({
    
}) */


const reducer = (state=initialState, action) => {
    console.log('hello im in reducer');
    const newState = { ...state };
    if (state === undefined) {
        return initialState;
      }
      switch(action.type) {
        case 'auth/login': {
            newState.token = action.payload.access;
            return newState;
        }
        case 'CHECK_ADD': {
            newState.cart = action.payload;
            return newState;
        }
        default: 
            break;
        
    }

    return state;

}

const store = createStore(reducer)

export default store;