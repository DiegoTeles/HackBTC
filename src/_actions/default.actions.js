/* Constant */
import { EVENT } from '../_constants';

/* Service */
import { eventService } from '../_services';

/**
 * Generic Failure
 *
 * @param {string} actionType - error type
 * @param {object} error      - error details
 *
 * @return {object}
 */
const failure = (actionType, error) => {
    return {
        type : actionType,
        error: error,
    };
}

/**
 * Get event Amount action
 *
 * @param {string} id        - event id
 * @param {object} [filters] - request params data
 */
const sugestion = (id, filters) => {
    /**
     * Amounts event data Success
     *
     * @param {object} data - event amounts data
     */
    const success = data => {
        return {
            type: EVENT.SUCCESS,
            data: data,
        };
    };
    
    return dispatch => {
        eventService.getSugestion(id, filters).then(
            response => {
                dispatch(success(response));
            },
            error => {
                dispatch(failure(EVENT.FAILURE, error));
            },
        );
    };
};


/**
 * Get event Amount action
 *
 * @param {string} id        - event id
 * @param {object} [filters] - request params data
 */
const event = (id, filters) => {
    /**
     * Amounts event data Success
     *
     * @param {object} data - event amounts data
     */
    const success = data => {
        return {
            type: EVENT.EVENT_SUCCESS,
            data: data,
        };
    };
    
    return dispatch => {
        eventService.getEvent(id, filters).then(
            response => {
                dispatch(success(response));
            },
            error => {
                dispatch(failure(EVENT.EVENT_FAILURE, error));
            },
        );
    };
};
/* Export Redux Actions */
export const eventActions = {
    sugestion,
    event
};