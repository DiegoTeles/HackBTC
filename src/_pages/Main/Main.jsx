import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

/* Action */
// import { eventActions } from "../../_actions";

/* Components */
import NavBar from "../../_components/NavBar";

/*  Styles */
const MainWrapper = styled.div`
	position: relative;
	background: #f3f2f3;

`;

const LabelBar = styled.div`
	justify-items: right;
	position: relative;
	background: #f3f2f3;
	/* float: left; */


`;

class Main extends Component {
	constructor(props) {
		super(props);

		this.props = props;
	}

	componentDidMount() {}

	render() {
		return (
			<MainWrapper>
				<LabelBar>
					<NavBar />
				</LabelBar>
			</MainWrapper>
		);
	}
}

/* Map State to Props/Childrens */
function mapStateToProps(state) {
	return state;
}

// the way to connect a component to redux is
// to return its connected proxy
export default connect(mapStateToProps)(Main);
