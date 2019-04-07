/* Constant */
import { EVENT, ERROR } from '../_constants';

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
        type: actionType,
        error: error,
    };
};

/**
 * Get event Deal action
 *
 * @param {string} id        - event id
 * @param {object} [filters] - request params data
 */
const deal = (id, filters) => {
    /**
     * Deal data Success
     *
     * @param {object} data - event deal data
     */
    const success = data => {
        return {
            type: EVENT.DEAL_SUCCESS,
            data: data,
        };
    };

    return dispatch => {
        eventService.getDeal(id, filters).then(
            response => {
                eventService.data.deal = response.data;
                dispatch(success(response.data));
            },
            error => {
                dispatch(failure(EVENT.DEAL_FAILURE, error));
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
const amounts = (id, filters) => {
    /**
     * Amounts event data Success
     *
     * @param {object} data - event amounts data
     */
    const success = data => {
        return {
            type: EVENT.AMOUNTS_SUCCESS,
            data: data,
        };
    };

    return dispatch => {
        eventService.getAmounts(id, filters).then(
            response => {
                dispatch(success(response.data));
            },
            error => {
                dispatch(failure(EVENT.AMOUNTS_FAILURE, error));
            },
        );
    };
};

const events = (id, filters) => {
    /**
     * Events list data Success
     *
     * @param {object} data - event list data
     */
    const success = data => {
        return {
            type: EVENT.LIST_SUCCESS,
            data: data,
        };
    };

    return dispatch => {
        eventService.getEvents(id, filters).then(
            response => {
                dispatch(success(response));
            },
            error => {
                if (error.code === 4040) {
                    dispatch(failure(EVENT.LIST_FAILURE, ERROR[error.code]));
                    return;
                }
            },
        );
    };
};

const transactionOff = (id, filters) => {
    /**
     * Events list data Success
     *
     * @param {object} data - event list data
     */
    const success = data => {
        return {
            type: EVENT.TRANSACTIONOFF_SUCCESS,
            data: data,
        };
    };

    return dispatch => {
        eventService.getTransactionsOff(id, filters).then(
            response => {
                dispatch(success(response.data));
            },
            error => {
                if (error.code === 4041) {
                    dispatch(failure(EVENT.TRANSACTIONOFF_FAILURE, ERROR[error.code]));
                    return;
                }
            },
        );
    };
};

const getRepayment = (id, filters) => {
    /**
     * Repayment for events data Success
     *
     * @param {object} data - repayment list data
     */
    const success = data => {
        return {
            type: EVENT.REPAYMENT_SUCCESS,
            data: data,
        };
    };

    return dispatch => {
        eventService.getRepayment(id, filters).then(
            response => {
                dispatch(success(response));
            },
            error => {
                if (error.code === 404) {
                    dispatch(failure(EVENT.REPAYMENT_FAILURE, ERROR[error.code]));
                    return;
                }
            },
        );
    };
};

const getDeductions = (id, filters) => {
    /**
     * Repayment for events data Success
     *
     * @param {object} data - repayment list data
     */
    const success = data => {
        return {
            type: EVENT.DEDUCTIONS_SUCCESS,
            data: data,
        };
    };

    return dispatch => {
        eventService.getDeductions(id, filters).then(
            response => {
                dispatch(success(response.data));
            },
            error => {
                dispatch(failure(EVENT.DEDUCTIONS_FAILURE, error));
            },
        );
    };
};

const clear = () => {
    /**
     * Clear reducers
     */
    const clear = () => {
        return {
            type: EVENT.CLEAR
        };
    };
    return dispatch => {
        dispatch(clear());
    };
};

//
/* Export Redux Actions */
export const eventActions = {
    amounts,
    clear,
    deal,
    events,
    getDeductions,
    getRepayment,
    transactionOff,
};
