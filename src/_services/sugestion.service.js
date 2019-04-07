import request from './request.service'

/**
 * Sets the request service
 **/
const api = new request();

let data = {};

/**
 * Get All sugestions
 *
 * @param [query] - The url querystring.
 *
 * @return Promise
 */
const getSugestion = (id, query={}) => {
    return api.get(`sugestion`, query);
};

/**
 * Get All event
 *
 * @param id - The event id.
 * @param [query] - The url querystring.
 *
 * @return Promise
 */
const getEvent = (id, query={}) => {
    return api.get(`event`, query);
};

/* Constant object to represent Service Functions */
export const eventService = {
    data,
    getSugestion,
    getEvent,
    
};
