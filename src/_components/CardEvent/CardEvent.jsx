import React from 'react';
import styled from '@emotion/styled';

const ContainerWrapper = styled.div`
	padding: 20px;
	color: #333;
	min-width: 90px;
	width: 480px;

	margin-bottom: 20px;
	h4 {
		text-transform: uppercase;
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		margin-top: 16px;
		padding-bottom: 20px;
		border-bottom: 1px solid rgba(0,0,0, 0.1);
	}
	h5 {
		font-size: 16px;
		font-weight: 400;
	}

	.info {
		display: flex;
		justify-content: space-around;

		&	span {
			font-size: 14px;
		}
	}

	.data, .user {
		padding-top: 10px;
		display: flex;
		color: rgba(0,0,0, 0.6);

		& i {
			margin-right: 10px;
		}
	}
`;

export default (props) => (
	<ContainerWrapper onClick={props.click} className={props.className} marginRight={props.marginRight}>
		<h4>{props.evento}</h4>
		<div className="info">
			<div className="data">
				<i className="far fa-calendar-alt"></i>
				<span>{props.data}</span>
			</div>
			<div className="user">
				<i className="fas fa-user"></i>
				<h5>{props.name}</h5>
			</div>
		</div>
	</ContainerWrapper>
);