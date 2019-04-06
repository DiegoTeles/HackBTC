/* Constant */
import { EVENT } from '../_constants';

const initialState = {
    error : null,
    list  : null,
    report: null,
};

/* Export Reducer */
const event = (state = initialState, action) => {
    switch (action.type) {
        case EVENT.DEAL_SUCCESS:
            return {
                ...state,
                deal: action.data,
            };

        default:
            return state;

    }

}

/* Export Reducer */
export default event;
