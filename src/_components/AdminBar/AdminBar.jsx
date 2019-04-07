import React from 'react';
import styled from '@emotion/styled';

const AdminWrapper = styled.section`

	.admin-container {
		margin-bottom: 20px;
		padding: 10px 0;
		background: #f6f6f6;
		display: flex;
		justify-content: center;
		border-bottom: 2px solid #45A4C2;

		& ul {
			display: flex;
			margin-bottom: 0;

			& a {
				padding: 10px 30px;
				font-size: 20px;
				font-weight: 400;
			}
		}
	}

	li {
		list-style: none;
	}
`




export default class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<AdminWrapper>
					<nav className="admin-container">
							<ul>
								<li>
									<a href="#">Setor</a>
								</li>
								<li>
									<a  href="#">Cais</a>
								</li>
								<li>
									<a  href="#">Gate</a>
								</li>
							</ul>
					</nav>
				</AdminWrapper>				
			</React.Fragment>			
		)
	}

}
