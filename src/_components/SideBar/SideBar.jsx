import React from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import logoIdeal from '../../_assets/img/logo_Ideal.png'

const IMGWrapper = styled.img`
   margin: 30px 30px 0 50px ;
`;
const SideBarWrapper = styled.section`
	padding:  30px 0 0 20px;
	margin-top: 130px;

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
				color: #b5cc4e;
			}
		}	

	}
`;

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
					<IMGWrapper src={logoIdeal} height="50px" width="auto" alt=""/>
				<SideBarWrapper>
					<ul>
						<li>
							<i className="fas fa-home"></i> 
							<a href="#">HOME</a>
						</li>
						<li>
							<i className="fas fa-wallet"></i>
							<a href="#">PONTOS</a>							
						</li>
						<li>
							<i className="far fa-edit"></i>
							<a href="#">TODAS SUGESTOES</a>							
						</li>
						<li>
							<i className="fas fa-child"></i>
							<a href="#">DESAFIOS</a>
						</li>
						<li>
							<i className="far fa-calendar-alt"></i>
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
	const { sugestion } = state;

	return {
		sugestion: sugestion,
	};
}

// the way to connect a component to redux is
// to return its connected proxy
export default connect(mapStateToProps)(NavBar);
