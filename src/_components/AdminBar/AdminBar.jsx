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

		h3 {
			font-weight: 400;
		}
	}
`;




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
							<h3>Demografico</h3>
					</nav>
				</AdminWrapper>				
			</React.Fragment>			
		)
	}

}
