/* Packages */
import React from 'react';
import { Route } from 'react-router';

/* Function */
import renderMergedProps from './renderMergedProps.js';

/* Public Route */
const PublicRoute = ({ component, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
            return renderMergedProps(component, routeProps);
        }}/>
    );
}

/* Export */
export default PublicRoute;