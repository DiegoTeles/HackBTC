import React from "react";
import { connect } from 'react-redux';
import { BrowserRouter, Switch  } from 'react-router-dom';

/* Pages / Content */
import Main from './_pages/Main'
/* Routes Paths */
import { ROUTES } from './_constants';
/* Routes */
import PublicRoute from './_routers/PublicRoute'

class AppRouter extends React.Component {
	constructor(props) {
		super(props);

		this.props = props;
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<PublicRoute component={Main} patch={ROUTES.MAIN} />
				</Switch>
			</BrowserRouter>
		);
	}
}

/*  MAP STATE TO PROPS/CHILDRENS */
function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(AppRouter);
