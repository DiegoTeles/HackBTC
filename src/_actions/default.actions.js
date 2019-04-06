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

/* Export Redux Actions */
export const eventActions = {
};