import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
// import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import perfilImg from '../../_assets/img/22.png';

const NavBarWrapper = styled.header`
position: fixed;
width: 85%;
	background: #f6f6f6;
	display: flex;
	justify-content: space-between;
	padding-right: 30px;
	padding-left: 30px;
	align-items: center;
	box-shadow: 0 0 20px rgba(0,0,0,0.6);
	color: #333;
	z-index: 999;

	.navigation {
		display: flex;
		align-items: center;
	}

	.notification {
		display: flex;
		width: 60px;
		margin-right: 30px;	
		align-self: stretch;
		transition: .2s ease;	
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.notification i {
		font-size: 20px;
		color: #555;
	}

	.notification:hover {
		background: #45A4C2;
	}

	.notification:hover i {
		color: #f6f6f6;
		animation: anime-notification .7s;
	}

	.notification-badge {
		text-align: center;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: #45A4C2;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 10px;
		font-weight: 600;
		color: #f6f6f6;
		position: absolute;
		top: 10px;
		right: 0;
	}

	.notification:hover .notification-badge {
		display: none;
	}

	.user-image {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: #45A4C2;
		margin-right: 10px;
		margin-top: 10px;
		margin-bottom: 10px;
		cursor: pointer;
		overflow: hidden;
	}

	.user-name {
		font-weight: 400;
	}

	@keyframes anime-notification {
		0% {
			transform: rotate(0deg)
		}

		30% {
			transform: rotate(-30deg)
		}

		60% {
			transform: rotate(30deg)
		}

		100% {
			transform: rotate(0deg)
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
				<NavBarWrapper>
					<a href="#"></a>
					<nav className="navigation">
						<div className="notification">
							<i className="fas fa-bell"></i>
							<div className="notification-badge">
								<span>2</span>
							</div>
						</div>
            <img
              src={perfilImg}
              alt="Foto do usuário"
              className="user-image"
            >
            </img>
            <span class="user-name">Diego Telles</span>
					</nav>					
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
