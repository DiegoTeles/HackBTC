import request from './request.service'

/**
 * Sets the request service
 **/
const api = new request();

let data = {};

/**
 * Get event amounts
 *
 * @param id - The event id.
 * @param [query] - The url querystring.
 *
 * @return Promise
 */
const getSugestion = (id, query={}) => {
    return api.get(`sugestion`, query);
};

/**
 * Get event amounts
 *
 * @param id - The event id.
 * @param [query] - The url querystring.
 *
 * @return Promise
 */
const getEvent = (id, query={}) => {
    console.log('Get')
    return api.get(`event`, query);
};

// const setRepayment = (id, data, query={}) => {
//     return api.post(`event/${id}/repayment`, data, query);
// };

/* Constant object to represent Service Functions */
export const eventService = {
    data,
    getSugestion,
    getEvent
    
};
