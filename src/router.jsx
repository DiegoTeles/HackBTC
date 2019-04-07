import React from "react";
import { connect } from 'react-redux';
import { BrowserRouter, Switch  } from 'react-router-dom';

/* Pages / Content */
import Main from './_pages/Main'
import Admin from './_pages/Admin'
/* Routes Paths */
import { ROUTES } from './_constants';
/* Routes */
import PublicRoute from './_routers/PublicRoute'

class AppRouter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('rotas')
		return (
			<BrowserRouter>
				<Switch>
					{/* <PublicRoute component={Admin} patch={ROUTES.ADMIN} exact={true} /> */}
					<PublicRoute component={Main} patch={ROUTES.MAIN}exact={true} />
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
