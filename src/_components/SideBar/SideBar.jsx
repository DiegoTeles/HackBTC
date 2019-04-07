import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

const SideBarWrapper = styled.section`
	padding:  30px 0 0 20px;
	margin-top: 200px;

	li {
		color: white;
		font-size: 16px;
		padding: 5px ;
		/* line-height: 16px; */
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
						<li><i className="fas fa-home"></i> Home</li>
						<li><i className="fas fa-wallet"></i> PONTOS</li>
						<li><i className="far fa-edit"></i>  SUGESTOES CADASTRADAS</li>
						<li><i className="fas fa-child"></i> DESAFIOS</li>
						<li><i className="far fa-calendar-alt"></i>  EVENTOS</li>
					</ul>
				</SideBarWrapper>
			</React.Fragment>
		);
	}
}

/* Map State to Props/Childrens */
function mapStateToProps(state) {
	const { sugestion } = state;

	return {
		sugestion: sugestion,
	};
}

// the way to connect a component to redux is
// to return its connected proxy
export default connect(mapStateToProps)(NavBar);
