import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

const SideBarWrapper = styled.section`
	border: 1px solid red;
	padding: 30px;
	margin-top: 200px;

	li {
		color: white;
		font-size: 14px;
		padding: 5px ;
		transform: uppercase;
		text-decoration: none;
		list-style:none;
		font-family: "Open Sans", sans-serif;
		cursor: pointer;

		li:hover{
			background: blue;
		}
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
				<SideBarWrapper>
					<ul>
						<li>Home</li>
						<li>PONTOS</li>
						<li>SUGESTOES CADASTRADAS</li>
						<li>DESAFIOS</li>
						<li>EVENTOS</li>
					</ul>
				</SideBarWrapper>
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
