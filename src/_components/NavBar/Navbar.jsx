import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

const NavBarWrapper = styled.section`
	width: 100%;
	height: 10px;
	padding: 20px 20px 40px;
	background: #4b4b4b;
	/* font-family: Roboto, Helvetica Neue, sans-serif; */
	position: fixed;
	margin-left: 326px;
	justify-content: center;
	align-items: center;

	h1 {
		font-weight: normal;
		color: #fff;
		color: #fff;
		text-align: center;
		/* vertical-align:middle; */
		display: table-cell;
	}
`;

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<NavBarWrapper>
					<h1>NOTIFICATIONS</h1>
				</NavBarWrapper>
			</React.Fragment>
		);
	}
}

/* Map State to Props/Childrens */
function mapStateToProps(state) {
	const { event } = state;

	return {
		event: event,
	};
}

// the way to connect a component to redux is
// to return its connected proxy
export default connect(mapStateToProps)(NavBar);
