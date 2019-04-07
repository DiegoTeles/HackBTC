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
	position: relative;
	/* background: #f3f2f3; */
`;

const LabelBar = styled.div`
	position: fixed;
	width: 15%;
	height: 100%;
	float: left;
	background: #333333;
`;

const ContentWrapper = styled.section`
	/* margin-right: 200px; */
	
	float: right;
	width: 85%;
	min-height: 720px;
	height: 720px;

`;

const ContainerPost = styled.section`
	/* margin: 60%; */
	background: #f7f6f6;
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
