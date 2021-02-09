import { combineReducer } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer