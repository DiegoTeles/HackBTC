import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

const SideBarWrapper = styled.section`
	padding:  30px 0 0 20px;
	margin-top: 200px;

	li {
		display: flex;
		align-items:center;
		color: #F6F6F6;
		transform: uppercase;
		font-family: "Open Sans", sans-serif;

		& i {
			color: #45A4C2;
			font-size: 20px;
		}

		& a {
			display: block;
			padding: 10px 20px;
			color: #f6f6f6;
			font-weight: 400;

			&:hover {
				color: #45A4C2;
			}
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
						<li>
							<i class="fas fa-home"></i> 
							<a href="#">HOME</a>
						</li>
						<li>
							<i class="fas fa-wallet"></i>
							<a href="#">PONTOS</a>							
						</li>
						<li>
							<i class="far fa-edit"></i>
							<a href="#">SUGESTOES CADASTRADAS</a>							
						</li>
						<li>
							<i class="fas fa-child"></i>
							<a href="#">DESAFIOS</a>
						</li>
						<li>
							<i class="far fa-calendar-alt"></i>
							<a href="#">EVENTOS</a>
						</li>
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
