import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

/* Constants */
import { ROUTES } from '../_constants';

/* Service */
import { flowService } from '../_services';

/* Routes */
import PublicRoute from './PublicRoute.jsx';


/* Component */
class PrivateRoute extends React.Component {
    /**
     * Constructor
     *
     * @param {object} props - component props
     */
    constructor(props) {
        super(props);
    }

    /* Render */
    render() {
        const { user } = this.props;
        console.log(this.props)

        if (user.data && user.data.authToken && !user.error) {
            return (
                <div className="aph flex flex--column flex--stretch layout">
                    <div className="aph flex__item">
                        <div className="aph flex flex__item">
                            <div className="aph flex__item layout__content">
                                <PublicRoute {...this.props} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <Redirect to={(ROUTES.MAIN + flowService.getSearch())} />
        );
    }
}

/* Map State to Props */
function mapStateToProps(state) {
    return state;
}

/* Export Component */
export default connect(mapStateToProps)(PrivateRoute);
