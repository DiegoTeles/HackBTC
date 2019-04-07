/* Constant */
import { EVENT } from '../_constants';

const initialState = {
    error : null,
    list  : null,
    report: null,
    sugestion: null,
    event: null,
};

/* Export Reducer */
const sugestionData = (state = initialState, action) => {
    switch (action.type) {
        case EVENT.SUCCESS:
            return {
                ...state,
                sugestion: action.data,
            };

            case EVENT.FAILURE:
            return {
                ...state,
                sugestion: null,
                error: action.error,
            };

            case EVENT.EVENT_SUCCESS:
            return {
                ...state,
                event: action.data,
            };

            case EVENT.EVENT_FAILURE:
            return {
                ...state,
                event: null,
                error: action.error,
            };
        default:
            return state;

    }

}

/* Export Reducer */
export default sugestionData;
