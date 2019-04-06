/* Packages */
import { combineReducers } from 'redux';

/* Reducers */
import event from './event.reducer';

const appReducer = combineReducers({
    event,
});

const rootReducer = (state, action) => {
    if (action.type === 'USER:LOGOUT') {
        state = undefined;
    }

    return appReducer(state, action);
}

/* Export Combined Reducers */
export default rootReducer;