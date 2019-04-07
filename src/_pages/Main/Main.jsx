import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

/* Action */
// import { eventActions } from "../../_actions";

/* Components */
import SideBar from '../../_components/SideBar';
import ShowContent from '../../_components/ShowContent';
/*  Styles */
const MainWrapper = styled.div`
	display: flex;
`;

const LabelBar = styled.div`
	position: fixed;
	width: 15%;
	height: 100%;
	background: #333333;
`;

const ContentWrapper = styled.section`
	width: 85%;
	margin-left: 15%;
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
					<SideBar />
				</LabelBar>
				<ContentWrapper>
					<ShowContent />
				</ContentWrapper>
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
