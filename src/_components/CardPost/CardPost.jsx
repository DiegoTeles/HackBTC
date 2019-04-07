import React from 'react';
import styled from '@emotion/styled';

const ContainerWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	border-radius: 4px 4px 0 0;
	overflow: hidden;
	border: 2px solid #45a4c2;
	box-shadow: none;
	h2 {
		font-size: 16px;
		margin: 10px;
		min-height: 50px;
	}

	.card-info {
		background: #45a4c2;
		color: #f6f6f6;
		padding: 2px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		font-size: 12px;

		& > div {
			display: flex;
			align-items: center;
		}

		& p {
			margin: 0;
			font-weight: 500;
		}

		& span {
			font-size: 12px;
		}

		.info-post {
			width: 100%;
		}

		& i {
			margin: 0 5px;
		}
	}
`;

const BadgeWrapper = styled.div`
	.tags {
		background: #45a4c2;
		margin-bottom: 20px;
		border-radius: 0 0 4px 4px;
		font-size: 10px;
		border-top: 1px solid #f6f6f6;
		padding: 3px;
		font-weight: 500;

		& span {
			color: #45a4c2;
			background: #f6f6f6;
			padding: 2px 5px;
			border-radius: 50px;
			margin: 5px;
		}
	}
`;

export default props => (
	<React.Fragment>
		<ContainerWrapper
			onClick={props.click}
			className={props.className}
			marginRight={props.marginRight}>
			<h2>{props.post}</h2>
			<div className='card-info'>
				<div>
					<i className='far fa-calendar-alt' />
					<span>{props.datePost}</span>
				</div>

				<div>
					<i className='fas fa-user' />
					<p>{props.namePost}</p>
				</div>
			</div>
			<button onClick={props.sum}>5</button>
		</ContainerWrapper>

		<BadgeWrapper>
			<div className='tags'>
				<span>{props.tag}</span>

				<span>{props.tag}</span>
			</div>
		</BadgeWrapper>
	</React.Fragment>
);
