import React from 'react';
import styled from '@emotion/styled';

const ContainerWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-radius: 4px;
	overflow: hidden;
	border: 2px solid #45A4C2;

	h2 {
		font-size: 16px;
		margin: 10px;
	}

	.card-info {
		background: #45A4C2;
		color: #f6f6f6;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;

		& p {
			margin: 0;
			font-weight: 500;
		}

		& span {
			font-size: 12px;
			min-width: 80px;
		}
	}
`;

export default props => (
	<ContainerWrapper
		onClick={props.click}
		className={props.className}
		marginRight={props.marginRight}>
		<h2>{props.post}</h2>
		<div className="card-info">
			<p>{props.namePost}</p>
			<span>{props.datePost}</span>
		</div>
	</ContainerWrapper>
);
